import React, {useState} from "react";
import axios from "axios"
import './Weather.css'


export default function Weather (){

  const[weatherData, setWeatherData]= useState({});
   const [ready, setReady]= useState(false)

  function handleResponse(response){
    console.log(response.data)
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
     tempMax: response.data.main.temp_max,
     tempMin: response.data.main.temp_min,
    })
    setReady(true);
  }

  if (ready){
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
          <p className="date">Tue, 6:00</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
            className="image"
          />
        </div>
        <div className="row">
          <div className="col-6">
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
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