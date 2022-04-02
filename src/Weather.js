import React, {useState} from "react";
import axios from "axios"
import './Weather.css'
import FormattedDate from './FormattedDate'


export default function Weather (){

  const[weatherData, setWeatherData]= useState({ready: false});
  

  function handleResponse(response){
    console.log(response.data)
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
     tempMax: response.data.main.temp_max,
     tempMin: response.data.main.temp_min,
     description: response.data.weather[0].description,
     date: new Date(response.data.dt * 1000)
    })
    
  }

  if (weatherData.ready){
    return (
      <div className="wrapper">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search here..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3 ">
              <input
                type="submit"
                value="Search"
                className="button btn btn-dark  w-100"
              />
            </div>
          </div>
        </form>
        <div className="info">
          <h1 className="city">{weatherData.city}</h1>
          <p className="date"><FormattedDate date={weatherData.date}/></p>
          <div className="text-capitalize description">{weatherData.description}</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt={weatherData.description}
            className="image"
          />
        </div>
        <div className="row">
          <div className="col-6">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>High: {Math.round(weatherData.tempMax)}°C</li>
              <li>Low: {Math.round(weatherData.tempMin)}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else{
    const apiKey = "30b4b8df96ab8adabf4f389d73097df8";
    let city = "New York";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    
    return(
      <h1>Loading...</h1>
    )
  }

  
}