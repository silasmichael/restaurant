import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import { Link } from 'react-router-dom'
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import FoodMenu from './FoodMenu';

function Home() {
    return (
        <div>
            <Navbar/>
            <div className="home">
                <div className="home-welcome">
                    <span>ENJOY YOUR HEALTHY DELICIOUS MEAL</span>
                    <h1 className="home-welcome-h1">Treat Yourself</h1>
                    <div className="home-welcome-msg">
                        <p>with Love😍 by eating food🍝 prepared by 
                            professinals👨🏼‍🍳 and it is meant to give you joy😂, peace✌🏼 and the 
                            feeling of the Kingship👑. Welcome to Chinese Restautant 😋
                        </p>
                    </div>
                    <div className="home-explore">
                        <Link to="/menu">
                            <button className="home-explore-button">Explore More</button>
                        </Link>
                    </div>
                    <div class="home-social">
                        <span>scroll down</span>
                        <div className="home-social-icons">
                            <WhatsAppIcon fontSize="large" />
                            <InstagramIcon fontSize="large"/>
                            <FacebookIcon fontSize="large"/>
                            <TwitterIcon fontSize="large"/>
                        </div>
                    </div>
                </div>
                <div className="menu-section">
                    <div className="home-menu">
                        <div className="home-memu-category">
                            <span className="subtitle">Select Your Meal 🍗</span>
                            <h3 className="home-menu-category-h3">Popular  
                            <strong className="home-menu-category-h3-strong"> Foods</strong></h3>
                            <ul>
                                <li>
                                    <Link className="link">
                                        <img className="food-icon" src="https://untree.co/demos/meal/images/1x/noodles.png" alt="Breakfast"/>
                                        <span>Breakfast</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link">
                                        <img className="food-icon" src="https://untree.co/demos/meal/images/1x/chicken.png" alt="Lunch"/>
                                        <span>Lunch </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link">
                                        <img className="food-icon" src="https://untree.co/demos/meal/images/1x/hotdog.png" alt="Dinner"/>
                                        <span>Dinner</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link">
                                        <img className="food-icon" src="https://untree.co/demos/meal/images/1x/drinks.png" alt="Drinks"/>
                                        <span>Drinks</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="home-memu-category-food">
                            <div className="home-memu-category-food-header">
                                <h2><span id="caterogy">Breakfast</span></h2>
                                <p><span id="number">1</span>/4</p>
                            </div>
                            <FoodMenu/>
                        </div>
                    </div>
                    <div className="home-dessert">
                        <div className="home-dessert-title">
                            <span className="subtitle">Choose Dessert 🍨</span>
                            <h3 className="home-menu-category-h3">Popular  
                            <strong className="home-menu-category-h3-strong"> Dessert</strong></h3>
                        </div>
                        <div className="home-dessert-container">
                            <div className="home-dessert-container-item">
                                <img src="https://untree.co/demos/meal/images/1x/dessert_1.png" alt= "Cherry  Muffin"/>
                                <div className="item-detail">
                                    <h3 id="title">Cherry  Muffin</h3>
                                    <span id="price">15$</span>
                                </div>
                            </div>
                            <div className="home-dessert-container-item">
                                <img src="https://untree.co/demos/meal/images/1x/dessert_2.png " alt= "Rose Muffin"/>
                                <div className="item-detail">
                                    <h3 id="title">Rose Muffin</h3>
                                    <span id="price">20$</span>
                                </div>
                            </div>
                            <div className="home-dessert-container-item">
                                <img src="https://untree.co/demos/meal/images/1x/dessert_3.png" alt= "Sweet Donut"/>
                                <div className="item-detail">
                                    <h3 id="title">Sweet Donut</h3>
                                    <span id="price">18$</span>
                                </div>
                            </div>
                            <div className="home-dessert-container-item">
                                <img src="https://untree.co/demos/meal/images/1x/dessert_4.png" alt= "Choco Cake"/>
                                <div className="item-detail">
                                    <h3 id="title">Choco Cake</h3>
                                    <span id="price">15$</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                

            </div>
        </div>
    )
}

export default Home
