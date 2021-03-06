import axios from "axios";
import React, {useEffect, useState} from "react";
import "./Forecast.css"
import ForecastDay from "./ForecastDay.js"

export default function Forecast(props){
  let [loaded, setLoaded]= useState(false)
  let[forecast, setForecast]= useState(null)
  
useEffect(()=>{
setLoaded(false)
}, [props.coordinates]);

function handelResponse(response){

setForecast(response.data.daily);
setLoaded(true);
}

  
  if (loaded){
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index<3){
              return(
                <div className="col forecastBoxes" key={index}>
   <ForecastDay data={dailyForecast} />
 </div>
              )
            } else{
              return null
            }
 
          })}
         
        </div>
      </div>
    );
  } else{
let apiKey = "30b4b8df96ab8adabf4f389d73097df8";
let latitude = props.coordinates.lat;
let longitude= props.coordinates.lon
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

axios.get(url).then(handelResponse);
return null
    }
}

