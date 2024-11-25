import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Dashboard = () => {
  
  return (
    <div  className='flex h-screen flex-col sm:flex-row'>
       
<nav className='bg-gray-800 text-white  p-3 flex-shrink-0  sm:w-full w-44 lg:w-44 md:w-32'>
  <ul className=''> 
    <li className='mb-2'>
      <Link to='ResourceCreation'>ResourceCreation</Link>
    </li>
    <li>
      <Link to='ViewResources'>ViewResources</Link>
    </li>
  </ul>
</nav>
       
<Outlet/>
    </div>
  )
}

export default Dashboard