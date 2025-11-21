import React,{useEffect,useContext} from "react";
import useSearch from "../useSearch.jsx";
import "./Cards.css"
import search_icon from "../assets/search.png"
import clear from "../assets/clear.png"
import cloud from "../assets/cloud.png"
import drizzle from "../assets/drizzle.png"
import rain  from "../assets/rain.png"
import snow from "../assets/snow.png"
import wind from "../assets/wind.png"
import { useNavigate } from "react-router-dom";
import { CityContext } from "../contex/CityContext";


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


function Cards (props){
   const navigate = useNavigate();
    const weather = useSearch(props.city);
    const { setCity } = useContext(CityContext);

    // useEffect(() => {
    //     console.log( weather);
    // }, [weather]);
    console.log( weather);

      if (!weather || !weather.weather || !weather.weather[0] || !weather.main) {
    return <p>Loading...</p>;
  }


    const iconSrc = allIcons[weather.weather[0].icon] || clear;

    const handleDetails = () => {
    setCity(props.city);      
    navigate("/details"); 
  };
    return(

       <div className="Card">
            <img src={iconSrc} className="weather-icon"></img>
            <p className="temperature">{Math.floor(weather.main.temp)}°C</p><br></br>
            <p className="location">{props.city}</p><br></br>
            <button onClick={handleDetails} className="detailsBtn">
            Shiko Detajet
            </button>
        </div>
    );
 }

export default Cards;
