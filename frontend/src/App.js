import React, { useRef } from 'react';
import NavBar from './components/NavBar';
import TrafficMap from './components/mapView';
import SideNav from './components/SideNav';


const App = () => {
  const mapRef = useRef();

  const handleDownloadClick = () => {
    if (mapRef.current) {
      mapRef.current(); // Call the exportOSMFile function
    }
  };

  return (
    <div className=''>
      <NavBar />
      <div>
        <SideNav onDownloadClick={handleDownloadClick} />

        <main class="pt-16 sm:pl-64">
          <div class="p-4">
            {/* <h1 class="text-gray-700 text-xs uppercase tracking-wider">Content</h1> */}

            <div class="bg-white rounded shadow font-semibold text-center hover:shadow-md">
                <TrafficMap exportOSMFileRef={mapRef} />
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
