import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div className='' >
<nav  >
    <ul className='flex flex-row  bg-slate-600 h-10 '>
        <li className='mt-2 flex-grow text-center'>
            <Link to="">Home</Link>
        </li>
        <li className='mt-2 flex-grow text-center'>
            <Link to="registration">Registration</Link>
        </li>
        <li className='mt-2 flex-grow text-center'>
            <Link to="login">Login</Link>
        </li>
    </ul>
</nav>
<Outlet/>
    </div>
  )
}

export default Layout