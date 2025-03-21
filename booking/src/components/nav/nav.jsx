import React from "react" 
import "./nav.css"
import logoPic from "./../../images/Asset 18@4x.png"



function Nav() {
    return (
        <>
    <div className="bar" >
        <div className="logo">
            <img  src ={logoPic} alt="log"/>
        </div>
        <ul>
            <li><a href = "#HOME">HOME</a></li>
            <li><a href = "#tables">TABLES</a></li>
            <li><a href = "#TABLES">STUFF</a></li>
            <li><a href = "#TABLES">MEALS</a></li>
            <li><a href = "#contacts">contacts</a></li>
        </ul>
    </div>
        </>
    )
}  
export default Nav