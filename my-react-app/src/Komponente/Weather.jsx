import React, { useEffect } from "react";
import './Weather.css'
import search_icon from "../assets/search.png"
import clear from "../assets/clear.png"
import cloud from "../assets/cloud.png"
import drizzle from "../assets/drizzle.png"
import humidity from "../assets/humidity.png"
import rain  from "../assets/rain.png"
import snow from "../assets/snow.png"
import wind from "../assets/wind.png"

function Weather(){
    const search =async (city) =>{
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data)

            
        } catch (error) {
            
        }

    }

    useEffect(()=> {
        search("London");
    },[])

    return(
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="Kerko" />
                <img src={search_icon}/>

            </div>
            <img src={clear} className="weather-icon"></img>
            <p className="temperature">16°C</p>
            <p className="location">London</p>
        </div>
    );
}

export default Weather