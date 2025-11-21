// import "./Hyrje/SearchBtn.css"
import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
// import "../Hyrje/SearchBtn.css";
import Cards from "./Weather_card/Cards.jsx";
import search_icon from "./assets/search.png";
import Ls_list from "./Ls_list.jsx"


function SearchPreferenca (){
    const inputRef = useRef();
  const { city: cityParam } = useParams(); 
  const [city, setCity] = useState("");

  useEffect(() => {
    if (cityParam) {
      setCity(cityParam); 
    } else {
      setCity("Tirana"); 
    }
  }, [cityParam]);

  const handleSearch = () => {
    const value = inputRef.current.value.trim();
    if (!value) {
      alert("Vendos nje qytet");
      return;
    }
    setCity(value);
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