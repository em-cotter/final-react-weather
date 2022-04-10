import React from "react"


export default function WeatherTemp(props){
   
    
    return (
      <div>
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit linkUnit">
          °C 
         
         
        </span>
      </div>
    )}