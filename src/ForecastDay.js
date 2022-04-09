import React from "react";

export default function ForecastDay(props){
    let iconCode= props.data.weather[0].icon
    console.log(props.data)

    function day(){
        let date= new Date(props.data.dt*1000)
        let day= date.getDay()

        let days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        return days[day]
    }
return(
<div>
<div className="ForecastDay">{day()}</div>
            <div>
              <img
                src= {`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
                alt="Icon"
                className="forecastIcon"
              />
            </div>{" "}
            <span> H:{Math.round(props.data.temp.max)}°</span>{" "}
            <span>L:{Math.round(props.data.temp.min)}°</span>
            </div>)
            
            
}