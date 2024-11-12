import { useState } from 'react'
import HomePage from './page/home/home.jsx'
import Navbar from './page/navbar/Navbar.jsx'
import AboutPage from './page/About/About.jsx'
import Projects from './page/projects/projects.jsx'
import Contact from './page/contact/contact.jsx'
import {Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
