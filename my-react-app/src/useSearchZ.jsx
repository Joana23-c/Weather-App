import { useEffect, useState } from "react";
import { z } from "zod";

function useSearch(city) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  // localStorage.clear();

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

    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"1537e77cc28908232424578fb25c8485"}`;


    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`City not found or API error (status: ${response.status})`);
        }

      const data = await response.json();
    
        const parsed = weatherSchema.parse(data);
        console.log(weatherSchema.parse(data))
        setWeather(parsed);
        setError(null);
      } catch (err) {
        console.error("Gabim gjatë fetch ose validation:", err);
        setWeather(null);
        setError(err.message || "Unknown error");

      }
    };

    fetchData();
  }, [city]);

  return weather; 
}

export default useSearch;
