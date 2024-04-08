import React from "react";
import { v4 as uuidv4 } from "uuid";
import { months } from "../../utils/data";
import "./Months.css";

function Months({ setShowMonths }) {
  return (
    <div className="months-header">
      <div className="close">
        <span
          onClick={() => setShowMonths(false)}
          className="material-symbols-outlined"
        >
          close
        </span>
      </div>
      <div className="months-container">
        {months.map((m) => (
          <button key={uuidv4()} className="month">
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Months;
