import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, FeatureGroup, Popup, useMap } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';
import { saveAs } from 'file-saver';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

// Component to move the map view to the searched location
const FlyToLocation = ({ location }) => {
  const map = useMap();
  
  useEffect(() => {
    if (location) {
      map.flyTo(location, 13); // Fly to the location with zoom level 13
    }
  }, [location, map]);
  
  return null;
};

const TrafficMap = ({ exportOSMFileRef }) => {
  const [map, setMap] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const drawnItemsRef = useRef(new L.FeatureGroup());
  const [rectangle, setRectangle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedLocation, setSearchedLocation] = useState(null);

  // OpenStreetMap Geosearch provider
  const provider = new OpenStreetMapProvider();

  const handleCreated = (e) => {
    const layer = e.layer;
    if (rectangle) {
      drawnItemsRef.current.removeLayer(rectangle);
    }
    setRectangle(layer);
    drawnItemsRef.current.addLayer(layer);
  };

  const handleDeleted = () => {
    setRectangle(null);
  };

  const exportOSMFile = () => {
    if (rectangle) {
      const bounds = rectangle.getBounds();
      const bboxString = bounds.toBBoxString();

      axios
        .get(`http://localhost:5000/api/osm/download?bbox=${bboxString}`, {
          responseType: 'blob',
        })
        .then((response) => {
          const blob = new Blob([response.data], { type: 'application/octet-stream' });
          saveAs(blob, 'map.osm');
        })
        .catch((error) => {
          console.error('Error downloading OSM data:', error);
        });

      const bboxObject = bboxString.split(',').reduce((acc, val, index) => {
        switch (index) {
          case 0:
            acc.minX = parseFloat(val);
            break;
          case 1:
            acc.minY = parseFloat(val);
            break;
          case 2:
            acc.maxX = parseFloat(val);
            break;
          case 3:
            acc.maxY = parseFloat(val);
            break;
        }
        return acc;
      }, {});

      setCoordinates(bboxObject);
    }
  };

  // Search function for the location
  const searchLocation = (query) => {
    if (!query) {
      setSearchedLocation(null);
      return;
    }

    provider
      .search({ query })
      .then((results) => {
        if (results && results.length > 0) {
          const { x: lon, y: lat } = results[0]; // Extract lon and lat from the first result
          const location = [lat, lon];
          setSearchedLocation(location); // Set the searched location for the map to fly to
        } else {
          setSearchedLocation(null);
        }
      })
      .catch((error) => {
        console.error('Error searching location:', error);
      });
  };

  // Debounce to limit API calls
  const debouncedSearch = useRef(
    debounce((query) => {
      searchLocation(query);
    }, 500)
  ).current;

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query); // Call debounced search when typing
  };

  useEffect(() => {
    exportOSMFileRef.current = exportOSMFile;
  }, [rectangle]);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel(); // Cleanup debounce on unmount
    };
  }, []);

  return (
    <div>
      <div className="search-bar" style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Enter location to search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>

      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: '600px', width: '100%' }}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FeatureGroup ref={drawnItemsRef}>
          <EditControl
            position="topleft"
            onCreated={handleCreated}
            onDeleted={handleDeleted}
            draw={{
              rectangle: true,
              polygon: false,
              polyline: false,
              circle: false,
              marker: false,
              circlemarker: false,
            }}
            edit={{
              edit: true,
              remove: true,
            }}
          />
        </FeatureGroup>

        {/* Fly to searched location */}
        {searchedLocation && <FlyToLocation location={searchedLocation} />}
      </MapContainer>
    </div>
  );
};

export default TrafficMap;
