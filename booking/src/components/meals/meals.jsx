import React from "react";
import "./meals.css"
import mealo from "./../../images/images.jpg"

function Meals (){
    return (
        <div className="meals">
            <h3>our meals</h3>
            <div className="dishes">
                <div className="dish1">
                    <h4>fish and salad</h4>
                    <img src={mealo} alt="m,m"/>
                </div>
                <div className="dish1">
                    <h4>fish and salad</h4>
                    <img src={mealo} alt="m,m"/>
                </div>
                <div className="dish1">
                    <h4>fish and salad</h4>
                    <img src={mealo} alt="m,m"/>
                </div>
                <div className="dish1">
                    <h4>fish and salad</h4>
                    <img src={mealo} alt="m,m"/>
                </div>
                <div className="dish1">
                    <h4>fish and salad</h4>
                    <img src={mealo} alt="m,m"/>
                </div>
                <div className="dish1">
                    <h4>fish and salad</h4>
                    <img src={mealo} alt="m,m"/>
                </div>
            </div>
        </div>
    )
}

export default Meals;