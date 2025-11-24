import { useEffect, useState, useContext } from "react";
import useSearchZ from "./useSearchZ.jsx";
import { CityContext } from "./contex/CityContext";
import DetailsCard from "./Weather_card/DetailsCard.jsx"

function WeatherDetails() {
  const { city } = useContext(CityContext);
  
   const weather = useSearchZ(city);

  if (!weather) return <p>Loading...</p>;

  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

  return (
    <div>
      <DetailsCard city={city} temp={weather.main.temp} humidity={weather.main.humidity} press={weather.main.pressure} wind={weather.wind.speed} sunrise={sunrise} sunset={sunset}></DetailsCard>
    </div>
  );
}

export default WeatherDetails;
