import React from "react";

export default function Forecast(){
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