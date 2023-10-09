import React, { useState } from "react";
import "./Search.css";
import Weather from "./Weather";

export default function Search() {
  const [city, setCity] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
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
      <Weather />
    </div>
  );
}
