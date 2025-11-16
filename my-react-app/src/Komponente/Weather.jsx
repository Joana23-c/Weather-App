import React, { useEffect, useRef, useState } from "react";
import './Weather.css'
import search_icon from "../assets/search.png"
import clear from "../assets/clear.png"
import cloud from "../assets/cloud.png"
// import cloudM from "../assets/cloudM.png"
import drizzle from "../assets/drizzle.png"
import humidity from "../assets/humidity.png"
import rain  from "../assets/rain.png"
import snow from "../assets/snow.png"
import wind from "../assets/wind.png"

function Weather(){

    const inputRef = useRef()

    const [weatherData,setWeatherData] = useState(false);
    
    const allIcons = {
        "01d" : clear,
        "01n" : clear,
        "02d" : cloud,
        "02n" : cloud,
        "03d" : cloud,
        "03n" : cloud,
        "04d" : cloud,
        "04n" : cloud,
        "09d" : rain,
        "09n" : rain,
        "10d" : drizzle,
        "10n" : drizzle,
        "11d" : rain,
        "11n" : rain,
        "13d" : snow,
        "13n" : snow,
        "50d" : wind,
        "50n" : wind
    }


    const search =async (city) =>{
        if(city ===""){
            alert("Vendos nje qytet");
            return;
        }
        try {
            const url = ``;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data)

           
            const icon = allIcons[data.weather[0].icon]|| clear;
            // console.log(icon);

            setWeatherData({
                temperature : Math.floor(data.main.temp),
                location : data.name,
                icon : icon
            })

            
        } catch (error) {
            
        }

    }

    useEffect(()=> {
        search("Tirana");
    },[])

    return(
        <div className="weather">
            <div className="search-bar">
                <input ref={inputRef}type="text" placeholder="Kerko" />
                <img src={search_icon} onClick={() =>search(inputRef.current.value)}/>

            </div>
            <img src= {weatherData.icon} className="weather-icon"></img>
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>
        </div>
    );
}

export default Weather
