import React, { useState } from 'react';

import { Link} from 'react-router-dom';
import MenuCategory from './MenuCategory'


const menu = [{
    id:'breakfast',
    title:"Breakfast",
    number:"1",
    iconSrc:"https://untree.co/demos/meal/images/1x/noodles.png",
},
{
    id:'lunch',
    title:"Lunch",
    number:"2",
    iconSrc:"https://untree.co/demos/meal/images/1x/chicken.png",
},
{
    id:'dinner',
    title:"Dinner",
    number:"3",
    iconSrc:"https://untree.co/demos/meal/images/1x/hotdog.png",
},
{
    id:'drinks',
    title:"Drinks",
    number:"4",
    iconSrc:"https://untree.co/demos/meal/images/1x/drinks.png",
}];
function HomeMenu() {
    const [component, setComponent] = useState('breakfast')
    
    return (
        <div className="home-menu">
            <div className="home-memu-category">
                <span className="subtitle">Select Your Meal 🍗</span>
                <h3 className="home-menu-category-h3">Popular  
                <strong className="home-menu-category-h3-strong"> Foods</strong></h3>
                <ul>
                    {menu.map(({title,iconSrc,id})=>(
                        <li>
                            <Link onClick={()=>setComponent(id)} className="divlink">
                                <img className="food-icon" src={iconSrc} alt={title}/>
                                <span>{title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <MenuCategory component={component} menu ={menu}/>
            </div>
        </div>
    )
}

export default HomeMenu
