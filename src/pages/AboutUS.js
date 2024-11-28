import React from 'react'
import Navbar from '../components/nav/Navbar'
import Footer from '../components/footer/footer.js'
import AboutUsOne from '../components/aboutus/aboutUsOne'
import AboutUsTwo from '../components/aboutus/aboutUsTwo'

function AboutUS() {
  return (
    <div>
        <Navbar/>
        <AboutUsOne/>
        <AboutUsTwo/>
        <Footer/>
    </div>
  )
}

export default AboutUS