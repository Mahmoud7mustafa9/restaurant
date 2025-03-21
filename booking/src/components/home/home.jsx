import React from "react";
import "./home.css";
import menuimg from "./../../images/Asset 7@4x.png"

function Home (){
return <div className="homy">
    <div className="text">
    <h1>welcome to LITTLE LEMON </h1>
    <p>here you can find everything you wanna know about our restaurant </p>
    <p> we are here for you </p>
    </div>
    <div className="pic">
        <img src={menuimg} alt="kl" /> 
    </div>
    </div>

}

export default Home;