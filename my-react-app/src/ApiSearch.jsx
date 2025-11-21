import { useEffect, useState } from "react";

function ApiSearch (props){
    
    const [weatherData, setWeatherData] = useState(null);

      useEffect(() => {
    if (!props.city) return;

    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=1537e77cc28908232424578fb25c8485`;
      const response = await fetch(url);
      const data = await response.json();

      setWeatherData({
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: data.weather[0].icon
      });
    };

    fetchWeather();
  }, [props.city]);

    return(
        weatherData
    );
}

export default ApiSearch