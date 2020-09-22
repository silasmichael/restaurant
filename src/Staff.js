import React from 'react'
import img from "./image/400026800937_146404.jpg"
import './Staff.css'

const employee =[
    {
        name:"Michael Silas",
        img:img,
        position:"Owner",
        statement:"Welcome Home, Welcome Chinese Restaurant"
    },
    {
        name:"Caary Bright",
        img:"https://static1.squarespace.com/static/56a2785c69a91af45e06a188/56a27b2742f552ee7c6d797d/5bfecf734ae23734b1778ff6/1547736713010/Restaurant-Leadership-BetterManager.png?format=1500w",
        position:"Manager",
        statement:"Everything about Chinese Restaurant make me feel at home🏡, starting from the Food😋 we prepare, to the relationship with Co-workers👨🏼‍🍳, even the way we serve our customers🤼, everything is so incredible. Welcome HOME🏡 "
    },
    {
        name:"Shannon Renfroe",
        img:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GBAJWSUV3EI6RAML5G3TJDGYPU.jpg&w=300&h=450",
        position:"Chief Chef",
        statement:"I love cooking food that will make you remember old memories and create new one. welcome Chinese Restaurant"
    },
    {
        name:"Jonia John",
        img:"https://restaurantengine.com/wp-content/uploads/2015/01/deliver-excellent-customer-service-660x438.jpg",
        position:"Customer Service",
        statement:"I love serving you with Smile😊"
    },
    {
        name:"Michael Radden",
        position:"Customer Service",
        img:"https://www.gannett-cdn.com/presto/2020/06/05/PPHX/e5f8c73b-f2ee-47dd-9551-cc573ae092fb-HaroldsandMonroes11.JPG?width=660&height=441&format=pjpg&auto=webp",
        statement:"You just come and See for yourself😻,"
    },
    {
        name:"Ester Michael",
        position:"Customer Service",
        img:"https://www.menlynhotel.com/newsite/wp-content/uploads/2015/07/menlyn_hotel_restaurant2.jpg",
        statement:"We love you💖, Welcome HOME"
    },
    
]

function Staff() {
  
    return (
        <div className="staffs">
            <div>
                <h3 className="home-menu-category-h3">Meet Our  
                <strong className="home-menu-category-h3-strong"> Staff</strong>
                </h3>
            </div>
            <div className="staff-container">
                    {
                        employee.map((emp)=>(
                            <div className="staff">
                            <img className="staff-img" src={emp.img} alt={emp.name}/>
                            <div className="staff-detail">
                                <h2 id='name'>{emp.name}</h2>
                                <h3 id='position'>({emp.position})</h3>
                                <p id='description'>"{emp.statement}"</p>
                            </div>
                            </div>
                        ))
                    }

            

            </div>
        </div>
    )
}

export default Staff
