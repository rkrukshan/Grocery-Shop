import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div className='bg-gray-200'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
