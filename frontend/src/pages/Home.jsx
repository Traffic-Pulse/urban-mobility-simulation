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
							<div>Loading...</div>
						)}
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
