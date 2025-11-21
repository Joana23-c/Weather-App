import React,{ useEffect,useRef,useState } from "react";
import "./SearchBtn.css"
import Cards from "../Weather_card/Cards.jsx"
import search_icon from "../assets/search.png"

 
function SearchBtn(){
     const inputRef = useRef();
     const [city, setCity] = useState("Tirana");
     
     const handleSearch = () => {
    const value = inputRef.current.value;
    if (!value) {
      alert("Vendos nje qytet");
      return;
    }
    setCity(value);
  };
    return(
        <>
        <div className="weather">
            <div className="search-bar">

         <input type="text" placeholder="Kerko qytetin" ref={inputRef}/>
        <img src={search_icon} onClick={handleSearch} alt="search" />
            
        </div>
            <Cards city={city}></Cards>
        </div>
        </>
    );

}

export default SearchBtn