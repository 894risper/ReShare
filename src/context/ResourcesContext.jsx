import React, { createContext, useState } from 'react';

const ResourcesContext = createContext();

const ResourcesProvider = ({ children }) => {
  const [resources, setResources] = useState([]);

  // Function to add a new resource
  const addResources = (file,title,description,subject,tags,privacy) => {
    setResources((prevResources) => [...prevResources, {file,title,description,subject,tags,privacy}]);
  };

  return (
    <ResourcesContext.Provider value={{ resources, addResources }}>
      {children}
    </ResourcesContext.Provider>
  );
};

export { ResourcesContext, ResourcesProvider };
