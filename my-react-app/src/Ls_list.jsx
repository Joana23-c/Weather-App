import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom"; 



function Ls_list (props){
  const styles = {
    marginTop: '5px',
    padding: '10px',
    borderRadius: '50px',
    border : 'none',
    backgroundColor: 'blue',
    color: 'aliceblue', 
    font: 'bold'
  }
    const [allCities, setAllCities] = useState([]);
     const navigate = useNavigate(); 

useEffect(() => {
  if (!props.city) return;

  const storedCities = JSON.parse(localStorage.getItem("cityList")) || [];
 const exists = storedCities.includes(props.city);

    let updatedCities = exists;
    if (!exists) {
      updatedCities = [...storedCities, props.city]; 
      localStorage.setItem("cityList", JSON.stringify(updatedCities));
    } else {
      updatedCities = storedCities;
    }
    

    setAllCities(updatedCities);
    console.log(updatedCities);
  }, [props.city]);


    return(
         <div>
      <h2>Lista e Preferencave</h2>
      <ul>
        {allCities.map((c, index) => (
          <li key={index}>
            <button onClick={() => navigate(`/${c}`)} style={styles} >
            {c}
            </button>
            </li>
        ))}
      </ul>
    </div>
    );
}

export default Ls_list;