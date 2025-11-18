import React,{ useEffect,useRef,useState } from "react";
import "./SearchBtn.css"
import Cards from "../Weather_card/Cards.jsx"
import search_icon from "../assets/search.png"

 
function SearchBtn(){
    const inputRef = useRef()

    const [weatherData,setWeatherData] = useState(false);
    
    //marr te dhenat nga API dhe i vendos ne nje objekt nepermjet funsionit te useState setWeather data
    const search =async (city) =>{
        if(city ===""){
            alert("Vendos nje qytet");
            return;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"1537e77cc28908232424578fb25c8485"}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

           
        // const icon = allIcons[data.weather[0].icon]|| clear;
            // console.log(icon);

        setWeatherData({
                temperature : Math.floor(data.main.temp),
                location : data.name,
                icon : data.weather[0].icon
            })
   
        }
        // console.log(weatherData);

            useEffect(()=> {
                 search("Tirana");
                 
            },[])


    return(
        <div className="weather">
            <div className="search-bar">
                <input type="text" placeholder="Kerko" ref={inputRef} />
                <img src={search_icon} onClick={() =>search(inputRef.current.value)}/>
            </div>
            <Cards location={weatherData.location} temp={weatherData.temperature} icon={weatherData.icon}></Cards>
        </div>
    );
}

export default SearchBtn