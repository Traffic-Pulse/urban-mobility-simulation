import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';
import { saveAs } from 'file-saver';
import axios from 'axios';

const TrafficMap = () => {
  const [map, setMap] = useState(null);
  const [cordinates, setCordinates] = useState({});
  const drawnItemsRef = useRef(new L.FeatureGroup());
  const [rectangle, setRectangle] = useState(null);

  const handleCreated = (e) => {
    const layer = e.layer;
    
    // Remove any existing rectangle
    if (rectangle) {
      drawnItemsRef.current.removeLayer(rectangle);
    }
    
    setRectangle(layer);
    drawnItemsRef.current.addLayer(layer);
  };

  const handleDeleted = () => {
    setRectangle(null);  // Clear the rectangle state when deleted
  };

  const exportOSMFile = () => {
    if (rectangle) {
      const bounds = rectangle.getBounds();
      const bboxString = bounds.toBBoxString();

      axios.get(`http://localhost:5000/api/osm/download?bbox=${bboxString}`, {
        responseType: 'blob'  // Get response as blob
      })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/octet-stream' });
        saveAs(blob, 'map.osm');
        console.log('OSM data downloaded successfully');
      })
      .catch(error => {
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
      
      setCordinates(bboxObject);
    }
  };

  return (
    <div>
      <div>
        
      </div>
      {/* <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: '600px', width: '100%' }}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <FeatureGroup ref={drawnItemsRef.current}>
          <EditControl
            position="topleft" // Change position to 'topleft' for placing below zoom controls
            onCreated={handleCreated}
            onDeleted={handleDeleted}
            draw={{
              rectangle: true,
              polygon: false,
              polyline: false,
              circle: false,
              marker: false,
              circlemarker: false
            }}
            edit={{
              edit: true,
              remove: true
            }}
          />
        </FeatureGroup>
      </MapContainer>
      
      <button onClick={exportOSMFile}>Download Selected Area (.osm)</button> */}
    </div>
  );
};

export default TrafficMap;
