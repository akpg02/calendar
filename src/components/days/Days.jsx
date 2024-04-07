import React from "react";
import { v4 as uuidv4 } from "uuid";
import { manipulate } from "../../utils/data";
import "./Days.css";

function Days({ day, setDate, setShowDay }) {
  const handleChangeDay = (d) => {
    setDate(new Date(d.date));
    setShowDay(true);
  };

  const days = manipulate(day);

  return (
    <div className="days">
      <ul>
        {days.map((d) => (
          <li key={uuidv4()}>
            <button onClick={() => handleChangeDay(d)}>
              <div
                className={`circle ${d.currentMonth ? "" : "prev-date"} ${
                  d.today ? "active" : ""
                } ${d.selected ? "selected" : ""}`}
              >
                {d.number}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Days;
