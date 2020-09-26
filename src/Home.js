import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import { Link } from 'react-router-dom'
import HomeMenu from './HomeMenu';
import Footer from './Footer';
import Staff from './Staff';
import About from './About';
import Welcome from './Welcome';
import Dessert from './Dessert';



function Home() {
    
    return (
        <div>
            <Navbar/>
            <div className="home">
                <Welcome/>
                <div className="menu-section">
                    <HomeMenu/>
                </div>
                    
                <Dessert/>
                <Staff/>
                <div className="home-table">
                    <span id="table-span">BOOK A TABLE </span>
                    <h3 id="table-h3">Book A Table Now</h3>
                    <p class="table-msg">Please let us serve you in your Occasion 🎊. Book now!! Table for Birthday 🎂, Meeting 🤝🏼, Engagement 💍 , or 
                        Date 💏. We will do hard work for you and make it perfect and memorable </p>
                        <Link to="/table">
                            <button className="home-explore-button">Book Now</button>
                        </Link>
                </div>
                <About/>
                <Footer/>
                

            </div>
        </div>
    )
}

export default Home
