import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Dashboard = () => {
  
  return (
    <div  className='flex h-screen'>
       
<nav className='bg-gray-800 text-white w-44 p-3 flex-shrink-0'>
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