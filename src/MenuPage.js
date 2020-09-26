import React from 'react'
import Dessert from './Dessert'
import Footer from './Footer'
import HomeMenu from './HomeMenu'
import Navbar from './Navbar'
import Welcome from './Welcome'

function MenuPage() {
    return (
        <div>
            <Navbar/>
            <div className="home">
                <Welcome/>
                <div className="menu-section">
                    <HomeMenu/>
                </div>
                    
                <Dessert/>
            </div>
            <Footer/>
        </div>
    )
}

export default MenuPage
