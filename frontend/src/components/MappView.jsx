import React, { useState, useRef, useEffect, useContext } from 'react';
import { MapContainer, TileLayer, FeatureGroup, useMap } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';
import { saveAs } from 'file-saver';
import axios from 'axios';
import { AppContext } from "../helpers/Provider";

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

const MappView = ({ exportOSMFileRef }) => {
  const { searchedLocation, setIsLoading } = useContext(AppContext);

  const [map, setMap] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const drawnItemsRef = useRef(new L.FeatureGroup());
  const [rectangle, setRectangle] = useState(null);

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

      setIsLoading(true);
      axios
        // .get(`https://traffic-pulse-api.onrender.com/api/osm/download?bbox=${bboxString}`, {
        .get(`http://localhost:5000/api/osm/download?bbox=${bboxString}`, {
          responseType: 'blob',
        })
        .then((response) => {
          const blob = new Blob([response.data], { type: 'application/octet-stream' });
          saveAs(blob, 'map.osm');
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error downloading OSM data:', error);
          setIsLoading(false);
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
          default:
            break;
        }
        return acc;
      }, {});

      setCoordinates(bboxObject);
    }
  };

  useEffect(() => {
    exportOSMFileRef.current = exportOSMFile;
  }, [rectangle]);

  console.log(map, coordinates)

  return (
    <div style={{ height: '100%', overflow: 'hidden' }}>
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

export default MappView;
