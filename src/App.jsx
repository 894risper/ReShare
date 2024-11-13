import React from 'react'
import Registration from './pages/Registration'
import './index.css'
import Login from './pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Layout from './pages/Layout'
import ResourceCreation from './pages/ResourceCreation'
import Dashboard from './pages/Dashboard'
function App() {
  
  return (
    <>
      <BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
<Route index element={<Login/>} />
<Route path='registration'  element={<Registration/>}/>
<Route path='login' element={<Login/>} />
<Route path='ResourceCreation' element={<ResourceCreation/>}/>
<Route path='dashboard' element={<Dashboard/>} />

  </Route>
</Routes>

      </BrowserRouter>
     
    </>
  )
}

export default App
