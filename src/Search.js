import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="search" />
        <button className="btn btn-primary  mb-1">Search</button>
        <button className="btn btn-success ms-1 mb-1">Current</button>
      </form>
    </div>
  );
}
