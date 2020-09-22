import React from 'react'
import Foodmenu from './Foodmenu'
const foodmenus =[
    {
    id:"breakfast",
    foods:[
        {
            name:"Soybean Milk",
            src:"https://images.chinahighlights.com/allpicture/2014/10/b1fdff12a4e54372a28c14ce_299x199.jpg",
            price:"5$"
        },
        {
            name:"Dumplings",
            src:"https://images.chinahighlights.com/2014/03/meishi8fcdbdda308b_300x210.jpg",
            price:"10$"
        },
        {
            name:"Sour Pork",
            src:"https://eurohoteltz.com/wp-content/uploads/2019/10/BNW_6648.jpg",
            price:"3$"
        },
        {
            name:"Dumplings",
            src:"https://images.chinahighlights.com/allpicture/2019/01/9b7159f6d89449d997eaa5ab_894x596.jpg",
            price:"7$"
        },
    ]},
    {
        id:"lunch",
        foods:[
            {
                name:"Sichuan Pork",
                src:"https://images.chinahighlights.com/allpicture/2019/11/7b3afb974d7946bbbe397f7c_894x670.jpg",
                price:"40$"
            },
            {
                name:"Braised Pork Balls in Gravy",
                src:"https://untree.co/demos/meal/images/img_2_b.jpg",
                price:"25$"
            },
            {
                name:"Chow Mein",
                src:"https://images.chinahighlights.com/allpicture/2018/03/10725167158a4b8589bf3140_894x596.jpg",
                price:"10$"
            },
            {
                name:"Peking Roasted Duck",
                src:"https://untree.co/demos/meal/images/img_4_b.jpg",
                price:"8$"
            },
        ]
    },
    {
        id:"dinner",
        foods:[
            {
                name:"Spring Rolls",
                src:"https://untree.co/demos/meal/images/img_1.jpg",
                price:"10$"
            },
            {                
                name:"Wontons",
                src:"https://untree.co/demos/meal/images/img_2.jpg",
                price:"25$"
            },
            {
                name:"Kung Pao Chicken",
                src:"https://images.chinahighlights.com/allpicture/2019/11/31acb7b302ec4b48b17443ed_893x595.jpg",
                price:"11$"
            },
            {
                name:"Ma Po Tofu",
                src:"https://images.chinahighlights.com/allpicture/2019/11/62745d5a726045e4a99a3885_894x596.jpg",
                price:"20$"
            },
        ]
    },
    {
        id:'drinks',
        foods:[
            {
                name:"Strawberry Juice",
                src:"https://untree.co/demos/meal/images/img_1_d.jpg",
                price:"10$"
            },
            {
                name:"Lemonade",
                src:"https://untree.co/demos/meal/images/img_2_d.jpg",
                price:"20$"
            },
            {
                name:"Orange Soda ",
                src:"https://untree.co/demos/meal/images/img_3_d.jpg",
                price:"12$"
            },
            {
                name:"Plum juice",
                src:"https://untree.co/demos/meal/images/img_4_d.jpg",
                price:"10$"
            }
        ]
    },
    {    
    id:"dessert",
    food:[
        {
            name:"Cherry  Muffin",
            src:"https://untree.co/demos/meal/images/1x/dessert_1.png",
            price:"15$"
        },
        {
            name:"Rose Muffin",
            src:"https://untree.co/demos/meal/images/1x/dessert_2.png",
            price:"18$"
        },
        {
            name:"Sweet Donut",
            src:"https://untree.co/demos/meal/images/1x/dessert_3.png",
            price:"20$"
        },
        {
            name:"Choco Cake",
            src:"https://untree.co/demos/meal/images/1x/dessert_4.png",
            price:"15$"
        }
    ]
}
]

function MenuCategory(props) {
    const category = props.menu.find(({id})=>id===props.component);
    const selected = foodmenus.find(({id})=>id===props.component);
    console.log(selected.foods)
    return (
            <div>
                <div className="home-memu-category-food-header">
                    <h2><span id="caterogy">{category.title}</span></h2>
                    <p><span id="number">{category.number}</span>/4</p>
                </div>
                <Foodmenu selected={selected}/>
            </div>       
    )
}

export default MenuCategory
