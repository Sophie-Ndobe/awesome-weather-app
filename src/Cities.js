import React from "react";
import "./Cities.css";

export default function Cities() {
  return (
    <div className="Cities">
      <div className="row mt-2 mb-2">
        <div className="col-2">
          <a href="/">Houston</a>
        </div>
        <div className="col-2">
          <a href="/">Harare</a>
        </div>
        <div className="col-2">
          <a href="/">Barcelona</a>
        </div>
        <div className="col-2">
          <a href="/">Sydney</a>
        </div>
      </div>
    </div>
  );
}
