import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/home'
import About from './component/About.js'
import PageLayout from './component/PageLayout.js'
import Contact from './component/Contact.js'
import Education from './component/Education.js'



export default function App() {
  return (
    <Routes>
      <Route path='/' element={<PageLayout page='home' />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='education' element={<Education />} />


      </Route>


    </Routes>
  )
}
