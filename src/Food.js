import React from 'react'
import './Food.css'
import foodimage from './image/food/chorizo-mozarella-gnocchi-bake-cropped.jpg'
import { Link } from 'react-router-dom'

function Food() {
    return (
        <div className="food-item">
            <Link>
                <img className='food-img' src={foodimage} alt='food'/>
            </Link>
            <div className="food-detail">
                <Link  className='link1'>
                    <span id='title'>Nyama Choma</span>
                </Link>
                <span id='price'>Tsh 20000/=</span>
            </div>
        </div>
    )
}

export default Food
