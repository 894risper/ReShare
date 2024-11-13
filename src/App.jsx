import React from 'react'
import Registration from './pages/Registration'
import './index.css'
import Login from './pages/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
function App() {
  
  return (
    <>
      <BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
<Route index element={<Home/>} />
<Route path='registration'  element={<Registration/>}/>
<Route path='login' element={<Login/>} />

  </Route>
</Routes>

      </BrowserRouter>
     
    </>
  )
}

export default App
