import "./Cards.css"
import search_icon from "../assets/search.png"
import clear from "../assets/clear.png"
import cloud from "../assets/cloud.png"
import drizzle from "../assets/drizzle.png"
import rain  from "../assets/rain.png"
import snow from "../assets/snow.png"
import wind from "../assets/wind.png"

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
    
    return(

       <div className="Card">
            <img src={allIcons[props.icon]} className="weather-icon"></img>
            <p className="temperature">{props.temp}°C</p><br></br>
            <p className="location">{props.location}</p>
        </div>
    );
 }

export default Cards;
