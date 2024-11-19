import React from 'react'
import Registration from './pages/Registration'
import './index.css'
import Login from './pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Layout from './pages/Layout'
import ResourceCreation from './pages/ResourceCreation'
import Dashboard from './pages/Dashboard'
import { ResourcesProvider } from './context/ResourcesContext'
import ViewResources from './pages/ViewResources'
import EditResource from './pages/EditResource'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
function App() {
  
  return (
    <>
    <ResourcesProvider>
      <BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
<Route  path="home" index element={<Home/>} />
<Route path='registration'  element={<Registration/>}/>
<Route path='login' element={<Login/>} />
<Route path='ResourceCreation' element={<ResourceCreation/>}/>
<Route path='dashboard' element={<Dashboard/>} />
<Route path='ViewResources' element={<ViewResources/>}/>
<Route  path='edit' element={<EditResource/>}/>
<Route path='about' element={<AboutUs/>} />

  </Route>
</Routes>

      </BrowserRouter>
      </ResourcesProvider>
    </>
  )
}

export default App
