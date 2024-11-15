import React from 'react'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
const navigate = useNavigate();



  return (
    <div>

   <button type='button' onClick={()=>navigate('/ResourceCreation')}>Resource Creation
    </button> 
    <button type='button' onClick={()=>navigate('/ViewResources')}>Resource Creation
    </button>

    </div>
  )
}

export default Dashboard