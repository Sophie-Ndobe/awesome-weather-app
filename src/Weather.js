import React from "react";
import "./Weather.css";
import MainDate from "./MainDate";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h1>{props.city}</h1>
      <ul>
        <li>
          <MainDate />
        </li>
        <li className="description">{props.description}</li>
      </ul>
      <div className="row">
        <div className="col">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Weather Condition Icon"
              className="me-2"
            />
            <h2>{props.temperature}</h2>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col">
          <ul>
            <li>
              Humidity: <strong>{props.humidity}</strong>%
            </li>
            <li>
              Wind: <strong>{props.wind}</strong>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
