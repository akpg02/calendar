import React from "react";
import { v4 as uuidv4 } from "uuid";
import { months, monthNum } from "../../utils/data";
import "./Months.css";

function Months({ date, setDate, setShowMonths }) {
  const handleMonth = (m) => {
    setDate(new Date(date.setMonth(monthNum(m))));
    setShowMonths(false);
  };
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
          <button
            onClick={() => handleMonth(m)}
            key={uuidv4()}
            className="month"
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Months;
