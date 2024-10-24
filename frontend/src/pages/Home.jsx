import React, { useRef, useContext } from 'react'
import SideNav from '../components/SideNav';
import TrafficMap from '../components/mapView';
import { AppContext } from "../helpers/Provider";

const Home = () => {
  const { isLoading } = useContext(AppContext);
	const mapRef = useRef();

  const handleDownloadClick = () => {
    if (mapRef.current) {
      mapRef.current(); // Call the exportOSMFile function
    }
  };

	return (
		<div>
			<SideNav onDownloadClick={handleDownloadClick} />
			<main class="pt-16 sm:pl-64">
				<div class="p-4">
					<div class="bg-white rounded shadow font-semibold text-center hover:shadow-md">
						{!isLoading ? (
							<TrafficMap exportOSMFileRef={mapRef} />
						) : (
							<button type="button" class="bg-indigo-500 ..." disabled>
								<svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
								Loading...
							</button>
						)}
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
