import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Weather from "./Weather";
import Cities from "./Cities";
import WeatherForecast from "./WeatherForecast";

export default function Search({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  const [forecast, setForecast] = useState(" ");

  function displayWeatherForecast(response) {
    setForecast({
      day1Temp: Math.round(response.data.daily[0].temperature.day),
      day1Icon: response.data.daily[0].condition.icon,
      day1Time: response.data.daily[0].time,
      day2Temp: Math.round(response.data.daily[1].temperature.day),
      day2Icon: response.data.daily[1].condition.icon,
      day2Time: response.data.daily[1].time,
      day3Temp: Math.round(response.data.daily[2].temperature.day),
      day3Icon: response.data.daily[2].condition.icon,
      day3Time: response.data.daily[2].time,
      day4Temp: Math.round(response.data.daily[3].temperature.day),
      day4Icon: response.data.daily[3].condition.icon,
      day4Time: response.data.daily[3].time,
      day5Temp: Math.round(response.data.daily[4].temperature.day),
      day5Icon: response.data.daily[4].condition.icon,
      day5Time: response.data.daily[4].time,
    });
  }

  function displayWeather(response) {
    setWeather({
      ready: true,
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
    ApiCall();
  }

  function ApiCall() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(displayWeatherForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className="Search">
        <Cities />
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
          icon={weather.icon}
        />
        <WeatherForecast
          temp1={forecast.day1Temp}
          temp2={forecast.day2Temp}
          temp3={forecast.day3Temp}
          temp4={forecast.day4Temp}
          temp5={forecast.day5Temp}
          time1={forecast.day1Time}
          time2={forecast.day2Time}
          time3={forecast.day3Time}
          time4={forecast.day4Time}
          time5={forecast.day5Time}
          icon1={forecast.day1Icon}
          icon2={forecast.day2Icon}
          icon3={forecast.day3Icon}
          icon4={forecast.day4Icon}
          icon5={forecast.day5Icon}
        />
      </div>
    );
  } else {
    ApiCall();
    return <p>"Loading...</p>;
  }
}
