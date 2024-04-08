import React, { useState } from "react";
import PropTypes from "prop-types";

import { months } from "../../utils/data";
import Months from "../months/Months";
import Header from "../header/Header";
import "./Month.css";

function Month({ date, setDate }) {
  const [showMonths, setShowMonths] = useState(false);

  const nextMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() + 1)));
  };

  const previousMonth = () => {
    setDate(new Date(date.setMonth(date.getMonth() - 1)));
  };

  const previousYear = () => {
    setDate(new Date(date.setFullYear(date.getFullYear() - 1)));
  };

  const nextYear = () => {
    setDate(new Date(date.setFullYear(date.getFullYear() + 1)));
  };

  const getToday = () => {
    setDate(new Date());
  };

  return (
    <Header>
      {showMonths ? (
        <>
          <Months setShowMonths={setShowMonths} />
        </>
      ) : (
        <>
          <div className="month-header">
            <button onClick={getToday}>Today</button>
          </div>
          <ul className="month-menu">
            <li>
              <button className="prev" onClick={previousYear}>
                <i className="fa fa-angle-double-left"></i>
              </button>
            </li>
            <li>
              <button className="prev" onClick={previousMonth}>
                <i className="fas fa-angle-left prev"></i>
              </button>
            </li>
            <li>
              <span
                className="month-label"
                onClick={() => setShowMonths(!false)}
              >
                {months[date.getMonth()]}
              </span>{" "}
              {date.getFullYear()}
            </li>
            <li>
              <button className="next" onClick={nextMonth}>
                <i className="fas fa-angle-right next"></i>
              </button>
            </li>
            <li>
              <button className="next" onClick={nextYear}>
                <i className="fa fa-angle-double-right"></i>
              </button>
            </li>
          </ul>
        </>
      )}
    </Header>
  );
}

Month.propTypes = {
  date: PropTypes.object,
};

export default Month;
