import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Weather from "./Weather";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState(" ");

  function displayWeather(response) {
    console.log(response);
    setWeather({
      
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(city);

    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <button className="btn btn-primary  mb-1">Search</button>
        <button className="btn btn-success ms-1 mb-1">Current</button>
      </form>
      <Weather
        city={weather.city}
        temperature={weather.temperature}
        humidity={weather.humidity}
        wind={weather.wind}
        description={weather.description}
      />
    </div>
  );
}
