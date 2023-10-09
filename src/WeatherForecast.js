import React from "react";
import "./WeatherForecast.css";
import Icons from "./Icons";

export default function WeatherForecast(props) {
  let date1 = new Date(props.time1 * 1000);
  let day1 = date1.getDay();
  let date2 = new Date(props.time2 * 1000);
  let day2 = date2.getDay();
  let date3 = new Date(props.time3 * 1000);
  let day3 = date3.getDay();
  let date4 = new Date(props.time4 * 1000);
  let day4 = date4.getDay();
  let date5 = new Date(props.time5 * 1000);
  let day5 = date5.getDay();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <p>{days[day1]}</p>
          <Icons iconUpdate1={props.icon1} size={30} />
          <p>{props.temp1}°</p>
        </div>
        <div className="col-2">
          <p>{days[day2]}</p>
          <Icons iconUpdate2={props.icon2} size={30} />
          <p>{props.temp2}°</p>
        </div>
        <div className="col-2">
          <p>{days[day3]}</p>
          <Icons iconUpdate3={props.icon3} size={30} />
          <p>{props.temp3}°</p>
        </div>
        <div className="col-2">
          <p>{days[day4]}</p>
          <Icons iconUpdate4={props.icon4} size={30} />
          <p>{props.temp4}°</p>
        </div>
        <div className="col-2">
          <p>{days[day5]}</p>
          <Icons iconUpdate5={props.icon5} size={30} />
          <p>{props.temp5}°</p>
        </div>
      </div>
    </div>
  );
}
