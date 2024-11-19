import React, { createContext, useState } from 'react';

const ResourcesContext = createContext();

const ResourcesProvider = ({ children }) => {
  const [resources, setResources] = useState([]);

  // Function to add a new resource
  const addResources = (file,title,description,subject,tags,privacy) => {
    setResources((prevResources) => [...prevResources, {file,title,description,subject,tags,privacy}]);
  };
const  deleteResource =(index)=>{
  setResources((prevResources)=> prevResources.filter((_,i)=>i !==index))
}
  
  const editResource =(index,updatedResources)=>{
    setResources((prevResources)=>
      prevResources.map((resources,i)=>(i == index  ? updatedResources : resources))
  )
  }

  return (
    <ResourcesContext.Provider value={{ resources, addResources ,editResource,deleteResource}}>
      {children}
    </ResourcesContext.Provider>
  );
};

export { ResourcesContext, ResourcesProvider };
