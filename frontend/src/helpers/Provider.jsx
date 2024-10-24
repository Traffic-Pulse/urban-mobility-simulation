import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [searchedLocation, setSearchedLocation] = useState("");
	const [searchQuery, setSearchQuery] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	return (
		<AppContext.Provider value={{ 
			searchQuery,
			setSearchQuery,
			searchedLocation,
			setSearchedLocation,
			isLoading,
			setIsLoading
		}}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppContextProvider };