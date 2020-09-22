import React from 'react'
import Food from './Food'
import './Foodmenu.css'

function Foodmenu({selected}) {
    var fooditems=selected.foods;
    return (
        <div className="food-container">
            {
                fooditems.map((fooditem)=>(<Food name={fooditem.name} src={fooditem.src} price={fooditem.price}/>))
            }
        </div>
    )
}

export default Foodmenu
