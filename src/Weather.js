import React from "react";
import "./Weather.css"

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Tokyo</h1>
      <ul>
        <li>Monday 10:27</li>
        <li>Clear Skies</li>
      </ul>
      <div className="row">
        <div className="col">
          <div className="d-flex">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" />
            <h2>21</h2>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col">
          <ul>
            <li>Precipitation: 62%</li>
            <li>Wind: 2km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
