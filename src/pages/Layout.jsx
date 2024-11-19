import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className='' >
       
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
        
        <li className='mt-2 flex-grow text-center'>
           <Link  to="ResourceCreation"> </Link> 
        </li>
        <li>
            <Link to="dashboard"></Link>
        </li>
        <li>
            <Link to="ViewResources"></Link>
        </li>
        <li>
            <Link to="edit"></Link>
        </li>
        
    </ul>
</nav>
<Outlet/>
    </div>
  )
}

export default Layout