import React from 'react'

function Dessert() {
    return (
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
    )
}

export default Dessert
