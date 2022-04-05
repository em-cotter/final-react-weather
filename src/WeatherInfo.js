import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp"

export default function WeatherInfo(props){
    return (
      <div className="WeatherInfo">
        <div className="info">
          <h1 className="city">{props.data.city}</h1>
          <p className="date">
            <FormattedDate date={props.data.date} />
          </p>
          <div className="text-capitalize description">
            {props.data.description}
          </div>
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="image"
          />
        </div>
        <div className="row information">
          <div className="col-6">
            <WeatherTemp celcius={props.data.temperature} />
           
          </div>
          <div className="col-6">
            <ul >
              <li>High: {Math.round(props.data.tempMax)}°C</li>
              <li>Low: {Math.round(props.data.tempMin)}°C</li>
              <li>Humidity: {props.data.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
    
}