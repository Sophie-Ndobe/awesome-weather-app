import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <p>Tue</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=" "
          />
          <p>18°</p>
        </div>
        <div className="col">
          <p>Wed</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=" "
          />
          <p>23°</p>
        </div>
        <div className="col">
          <p>Thur</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=" "
          />
          <p>19°</p>
        </div>
        <div className="col">
          <p>Fri</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=" "
          />
          <p>16°</p>
        </div>
        <div className="col">
          <p>Sat</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=" "
          />
          <p>17°</p>
        </div>
      </div>
    </div>
  );
}
