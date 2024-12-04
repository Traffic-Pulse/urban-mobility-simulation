import React, { useContext, useState, useRef, useEffect } from 'react'
import { AppContext } from "../helpers/Provider";
import debounce from 'lodash.debounce';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

const SearchBar = () => {
  const { searchQuery, setSearchQuery, setSearchedLocation } = useContext(AppContext);
  
  // OpenStreetMap Geosearch provider
  const provider = new OpenStreetMapProvider();
  
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
    return () => {
      debouncedSearch.cancel(); // Cleanup debounce on unmount
    };
  }, []);

  return (
    <div className="w-full search-container max-w-2xl">
      <div className="search relative">
        <div className="relative z-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search something
          </label>

          <input
            type="search"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck="false"
            name="q"
            placeholder="Enter location to search..."
            title="Search"
            role="searchbox"
            aria-label="Search"
            aria-autocomplete="list"
            required
            id="search"
            className={`block w-full outline-0 p-2 pl-10 text-sm text-gray-900 bg-white  border border-gray-300 rounded-lg mt-10`}
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
