import React from 'react'
import { Link,Outlet, useLocation } from 'react-router-dom'
const Layout = () => {

    const location =useLocation();

   //defining routes  where the navbar should not apply
   const hideNavbarRoutes=['/dashboard','/edit','/dashboard/ViewResources','/dashboard/ResourceCreation']

  return (
    <div className='' >
{/*render the navbar only if the current route is not in the hideNavbarRoutes */ }

        {!hideNavbarRoutes.includes(location.pathname) &&(
       
<nav className='   bg-slate-400 h-10 px-1 py-2 p-2' >
    <ul className='flex flex-row  '>
        
        <li className='flex flex-grow text-center'>
            <Link to="home">Home</Link>
        </li>
        <li className='flex flex-grow text-center'>
            <Link to="login">Login</Link>
        </li>
        <li className='flex flex-grow text-center'>
            <Link to="registration">Registration</Link>
        </li>
        <li className='flex flex-grow text-center'>
            <Link to="about">About</Link>
        </li>
        <li>
            <Link to="/edit"></Link>
        </li>
        
        
    </ul>
</nav>
)}
<Outlet/>

    </div>
  )
}

export default Layout