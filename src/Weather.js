import React, {useState} from "react";
import axios from "axios"
import './Weather.css'
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast"


export default function Weather (props){

  const[weatherData, setWeatherData]= useState({ready: false});
  const [city, setCity]= useState(props.defaultCity)

  function handleResponse(response){
    
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
     tempMax: response.data.main.temp_max,
     tempMin: response.data.main.temp_min,
     description: response.data.weather[0].description,
     date: new Date(response.data.dt * 1000),
     icon:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
     coords: response.data.coord
    });
  }
  
  function handleSubmit(event){
    event.preventDefault()
    search();

  }
function handleCityChange(event){
setCity(event.target.value);
}
function search() {
  const apiKey = "30b4b8df96ab8adabf4f389d73097df8";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
}


  if (weatherData.ready){
    return (
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search here..."
                className="form-control"
                autoFocus="on"
                onChange= {handleCityChange}
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
        <WeatherInfo data={weatherData}/>
        <Forecast coordinates={weatherData.coords}/>
        </div>);
       
  } else{
  search();
    return "Loading..."; 
  }

}
