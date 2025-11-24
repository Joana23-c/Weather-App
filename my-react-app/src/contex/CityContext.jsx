
import { createContext, useState } from "react";

export const CityContext = createContext();

function CityProvider({ children }) {
  const [city, setCity] = useState("Tirana");
  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}

export default CityProvider;