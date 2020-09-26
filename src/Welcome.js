import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
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
    )
}

export default Welcome
