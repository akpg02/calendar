import React from "react";
import PropTypes from "prop-types";
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
        <button
          onClick={() => setShowMonths(false)}
          className="material-symbols-outlined"
        >
          close
        </button>
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

Months.propTypes = {
  date: PropTypes.object,
  setDate: PropTypes.func,
  setShowMonths: PropTypes.func,
};

export default Months;
