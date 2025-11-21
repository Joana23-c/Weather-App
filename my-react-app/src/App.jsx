import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBtn from "./Hyrje/SearchBtn.jsx";
import SearchPreferenca from "./SearchPreferenca.jsx";
import { CityProvider } from "./contex/CityContext.jsx";
import React, { Suspense } from "react";
import './App.css'


const WeatherDetails = React.lazy(() => import("./WeatherDetails.jsx"));


function App() {
  return (
   <div className="cards">
    <CityProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SearchBtn />} />

        <Route path="/:city" element={<SearchPreferenca />} />
        <Route path="/details/" element={
          <Suspense fallback={<p>Loading details...</p>}>
        <WeatherDetails />
         </Suspense>} />
      </Routes>
    </Router>
    </CityProvider>
   </div>
  );
  
}

export default App
