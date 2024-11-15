import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className='' >
<nav  >
    <ul className=' '>
        <li className=''>
            <Link to="login"></Link>
        </li>
        <li className='mt-2 flex-grow text-center'>
            <Link to="registration"></Link>
        </li>
        
        <li className='mt-2 flex-grow text-center'>
           <Link  to="ResourceCreation"> </Link> 
        </li>
        <li>
            <Link to="dashboard"></Link>
        </li>
        <li>
            <Link to="ViewResources"></Link>
        </li>
    </ul>
</nav>
<Outlet/>
    </div>
  )
}

export default Layout