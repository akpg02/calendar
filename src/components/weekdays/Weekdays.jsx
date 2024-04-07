import React from "react";
import { weekdays } from "../../utils/data";
import "./Weekdays.css";

function Weekdays() {
  return (
    <div className="weekdays">
      <ul>
        {weekdays.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </div>
  );
}

export default Weekdays;
