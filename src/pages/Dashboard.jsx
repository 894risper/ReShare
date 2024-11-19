import React from 'react'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
const navigate = useNavigate();



  return (
    <div className='flex flex-row'>
<div className=''>
   <button type='button' onClick={()=>navigate('/ResourceCreation')}>Resource Creation
    </button> 
    <button type='button' onClick={()=>navigate('/ViewResources')}>view Resources

    </button>
    </div>
    <div>
      <img src="src/assets/picture.jpg " alt="" />
    </div>

    </div>
  )
}

export default Dashboard