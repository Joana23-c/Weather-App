import { useEffect, useState } from "react";

function useWeather(city) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"1537e77cc28908232424578fb25c8485"}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    };

    fetchData();
  }, [city]);

  return weather; 
}

export default useWeather;
