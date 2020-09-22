import React, { useRef } from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import './About.css'
import GoogleMapComponent from './GoogleMapComponent';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="about">
            <div className="about-info">
            <h3 className="home-menu-category-h3">About   
            <strong className="home-menu-category-h3-strong"> Us</strong>
            </h3>
            <p id='description'> Welcome to Chinese Restaurant 🍽. Our mission is to
            make you remember the old memory also to create new one through our Services and 
            food🍔 you eat from our Restaurant. All our dream became true because of your trust 
            and commitment of our professional chiefs and workers. We have menaged not only to give 
            you memory but to make you feel like a King when your in our presence. </p>
            </div>
            <div className="about-adress">
                <h3 className="home-menu-category-h3">Contact   
                <strong className="home-menu-category-h3-strong"> Us</strong>
                </h3>
                <div className="adress">
                    <div className="adress-contact">
                        <table>
                            <tr>
                                <td><h4 className="h4"> Phone Number 📞</h4></td><td><p className="p">0765962793</p></td>
                            </tr>
                            <tr>
                                <td><h4 className="h4">Email Adress 🌐</h4></td><td><p className="p">press.orders@chiniserestaurant.com</p></td>
                            </tr>
                            <tr>
                                <td><h4 className="h4">Postal Adress 📧</h4></td><td><p className="p">3003, Dar es Salaam</p></td>
                            </tr>
                            <tr>
                                <td><h4 className="h4">Location 💢</h4></td><td><a href="https://goo.gl/maps/qUzdfePjL1CW6gzF6" className="p">Near Mlimani City, Dar es Salaam</a></td>
                            </tr>
                            
                        </table>

                    </div>
                    <div className="adress-map">
                        <GoogleMapComponent/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About
