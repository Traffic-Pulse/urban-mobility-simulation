import React, { useRef, useContext } from 'react'
import SideNav from '../components/SideNav';
import MappView from '../components/MappView';
import { AppContext } from "../helpers/Provider";

const Simulation = () => {
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
			<main class="pt-0 sm:pl-64">
				<div class="p-2">
					<div class="bg-white rounded shadow font-semibold text-center hover:shadow-md">
						{!isLoading ? (
							<MappView exportOSMFileRef={mapRef} />
						) : (
							<div>Loading...</div>
						)}
					</div>
				</div>
			</main>
		</div>
	)
}

export default Simulation
