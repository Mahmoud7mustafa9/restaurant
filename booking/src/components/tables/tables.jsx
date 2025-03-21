import React from "react";
import "./tables.css"
import tabl1 from "./../../images/image-006-1000x510.jpg"

function Tables (){
return(
    <div className="tables">
        <button> BOOK YOUR TABLE</button>
        <div className="available">
            <h2> our available tables</h2>
            <div className="table1">
                <h4>table 1 available</h4>
                <img src={tabl1} alt="1"/>
            </div>
            <div className="table1">
                <h4>table 1 available</h4>
                <img src={tabl1} alt="1"/>
            </div>
            <div className="table1">
                <h4>table 1 available</h4>
                <img src={tabl1} alt="1"/>
            </div>
            <div className="table1">
                <h4>table 1 available</h4>
                <img src={tabl1} alt="1"/>
            </div>
        </div>
    </div>
)
}
export default Tables ;