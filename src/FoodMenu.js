import React from 'react'
import Food from './Food'
import './FoodMenu.css'

function FoodMenu({selected}) {
    var fooditems=selected.foods;
    return (
        <div className="food-container">
            {
                fooditems.map((fooditem)=>(<Food name={fooditem.name} src={fooditem.src} price={fooditem.price}/>))
            }
        </div>
    )
}

export default FoodMenu
