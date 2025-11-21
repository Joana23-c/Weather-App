import './DetailsCard.css'

function DetailsCard (props){
    return(
        <> 
        <div className="card">
            <h2>Detajet e motit për {props.city}</h2><br></br>
            <p><b>Temperatura:</b> {props.temp}°C</p>
            <p><b>Lagështia:</b> {props.humidity}%</p>
            <p><b>Presioni:</b> {props.press} hPa</p>
            <p><b>Shpejtësia e erës:</b> {props.wind} m/s</p>
            <p><b>Sunrise:</b> {props.sunrise}</p>
            <p><b>Sunset:</b> {props.sunset}</p>
         </div>
        </>
    );
}


export default DetailsCard;
