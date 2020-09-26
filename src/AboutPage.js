import React from 'react'
import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'
import Welcome from './Welcome'

function AboutPage() {
    return (
        <div>
            <Navbar/>
            <div className="home">
                <Welcome/>
            </div>
            
            <About/>
            <Footer/>
        </div>
    )
}

export default AboutPage
