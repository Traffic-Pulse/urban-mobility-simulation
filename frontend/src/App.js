import React, { useRef } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import TrafficMap from './components/mapView';


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
        <aside class="hidden pt-16 w-64 text-white bg-gray-700 fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block">
          <div class="p-2 min-h-full">
              <div class=" pb-6 flex sm:flex-col">
                <SearchBar />
                
                <div className='mt-3'>
                  <button type='button' onClick={handleDownloadClick} className='w-full rounded-lg px-3 py-1 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300'>Generate Simulation</button>
                </div>
              </div>
            </div>
        </aside>

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
