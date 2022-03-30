import React from "react";
import './Weather.css'

export default function Weather (){
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

        <h1 className="city">New York</h1>
        <p className="date">Tue, 6:00</p>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          alt="mostly cloudy"
          className="image"
        />
        
        <div className="row">
          <div className="col-6">
            <span className="temperature">7</span>
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
}