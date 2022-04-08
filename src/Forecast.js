import axios from "axios";
import React from "react";

export default function Forecast(props){
  
function handelResponse(response){
console.log(response.data)
}
console.log(props)
  let apiKey = "30b4b8df96ab8adabf4f389d73097df8";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`
  
  axios.get(url).then(handelResponse)
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-4 forecastBoxes">
            <div className="ForecastDay">Wednesday</div>
            <div>
              <img
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt="Icon"
                className="forecastIcon"
              />
            </div>{" "}
            H:13° L:14°
          </div>
          <div className="col-4 forecastBoxes">
            <div className="ForecastDay">Thursday</div>
            <div>
              {" "}
              <img
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt="Icon"
                className="forecastIcon"
              />
            </div>{" "}
            H:13° L:14°
          </div>
          <div className="col-4 forecastBoxes">
            <div className="ForecastDay">Friday</div>
            <div>
              {" "}
              <img
                src="http://openweathermap.org/img/wn/02d@2x.png"
                alt="Icon"
                className="forecastIcon"
              />
            </div>{" "}
            H:13° L:14°
          </div>
        </div>
      </div>
    );
}