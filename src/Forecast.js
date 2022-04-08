import axios from "axios";
import React, {useState} from "react";
import "./Forecast.css"

export default function Forecast(props){
  let [loaded, setLoaded]= useState(false)
  let[forecast, setForecast]= useState(null)
  let iconUrl=`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`
function handelResponse(response){

setForecast(response.data.daily)
setLoaded(true)
}

  
  if (loaded){
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col forecastBoxes">
            <div className="ForecastDay">{forecast[0].dt}</div>
            <div>
              <img
                src= {iconUrl}
                alt="Icon"
                className="forecastIcon"
              />
            </div>{" "}
            <span> H:{Math.round(forecast[0].temp.max)}°</span>{" "}
            <span>L:{Math.round(forecast[0].temp.min)}°</span>
          </div>
        </div>
      </div>
    );} else{
let apiKey = "30b4b8df96ab8adabf4f389d73097df8";
let latitude = props.coordinates.lat;
let longitude= props.coordinates.lon
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

axios.get(url).then(handelResponse);
return null
    }
}

