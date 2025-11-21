import { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
import { CityContext } from "./contex/CityContext";
import { z } from "zod";
import DetailsCard from "./Weather_card/DetailsCard.jsx"
function WeatherDetails() {
  const { city } = useContext(CityContext);
//   const { city: cityParam } = useParams();
  const [weather, setWeather] = useState(null);

//   const city = cityParam || cityContext; 

 const weatherSchema = z.object({
    main: z.object({
      temp: z.number(),
      humidity: z.number(),
      pressure: z.number(),
    }),
    weather: z.array(
      z.object({
        icon: z.string(),
        description: z.string().optional(),
      })
    ),
    wind: z.object({
      speed: z.number(),
    }),
    sys: z.object({
      sunrise: z.number(),
      sunset: z.number(),
    }),
    name: z.string(),
  });



  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1537e77cc28908232424578fb25c8485`;
      const res = await fetch(url);
      const data = await res.json();
       try {
        const parsed = weatherSchema.parse(data);
        console.log(weatherSchema.parse(data))
        setWeather(parsed);
        console.log("sukses")
      } catch (err) {
        console.error("API response invalid:", err.errors);
        setWeather(null);
      }
    };
    //   setWeather(data);


    fetchWeather();
  }, [city]);

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
