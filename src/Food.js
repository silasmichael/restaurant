import React from 'react'
import './Food.css'
// import foodimage from './image/food/chorizo-mozarella-gnocchi-bake-cropped.jpg'
import { Link } from 'react-router-dom'

function Food({src,name,price}) {
    return (
        <div className="food-item">
            <Link>
                <img className='food-img' src={src} alt='food'/>
            </Link>
            <div className="food-detail">
                <Link  className='link1'>
                    <span id='title'>{name}</span>
                </Link>
                <span id='price'>{price}</span>
            </div>
        </div>
    )
}

export default Food
