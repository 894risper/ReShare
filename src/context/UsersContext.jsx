import React, {useEffect,useContext} from 'react'

const UsersContext =React.createContext (); 

const UsersContextProvider= ({children})=>{

    const [users,setUsers]= useState([]);

    useEffect(()=>{
        if(users){
            localStorage.setItem("users",JSON.stringify(users));
        }
    },[users])
  return (
    <div>UsersContext</div>
  )
}

export default UsersContext