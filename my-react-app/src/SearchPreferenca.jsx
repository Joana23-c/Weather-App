// import "./Hyrje/SearchBtn.css"
import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // 🔹 import për param-et nga URL
// import "../Hyrje/SearchBtn.css";
import Cards from "./Weather_card/Cards.jsx";
import search_icon from "./assets/search.png";
import Ls_list from "./Ls_list.jsx"


function SearchPreferenca (){
    const inputRef = useRef();
  const { city: cityParam } = useParams(); // 🔹 lexon :city nga URL
  const [city, setCity] = useState(""); // fillimisht bosh

  useEffect(() => {
    if (cityParam) {
      setCity(cityParam); // 🔹 vendos city nga URL kur komponenti mount-het
    } else {
      setCity("Tirana"); // opsionale: qyteti default
    }
  }, [cityParam]);

  const handleSearch = () => {
    const value = inputRef.current.value.trim();
    if (!value) {
      alert("Vendos nje qytet");
      return;
    }
    setCity(value);
    // mund të bësh navigate te URL-ja për të sinkronizuar
    // e.g., navigate(`/${value}`)
  };

  return (
    <>
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Kerko qytetin" ref={inputRef} />
        <img src={search_icon} onClick={handleSearch} alt="search" />
      </div>
      <Cards city={city} />
    </div>
    <Ls_list city={city}></Ls_list>
    </>
  );
}

export default SearchPreferenca;