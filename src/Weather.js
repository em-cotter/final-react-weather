import React, {useState} from "react";
import axios from "axios"
import './Weather.css'


export default function Weather (){

  const[temp, setTemp]= useState(null);
   const [ready, setReady]= useState(false)

  function handleResponse(response){
    console.log(response.data.main)
    setTemp(Math.round(response.data.main.temp))
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
          <h1 className="city">New York</h1>
          <p className="date">Tue, 6:00</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
            className="image"
          />
        </div>
        <div className="row">
          <div className="col-6">
            <span className="temperature">{temp}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Wind: 15km/h</li>
              <li>Humidity: 13%</li>
              <li>Mostly cloudy</li>
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