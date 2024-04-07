import React from "react";

import Container from "../container/Container";
import Header from "../header/Header";

import "./Day.css";
import Note from "../note/Note";

function Day({ day, setDate, setShowDay }) {
  const nextDay = () => {
    setDate(new Date(day.setDate(day.getDate() + 1)));
  };

  const previousDay = () => {
    setDate(new Date(day.setDate(day.getDate() - 1)));
  };

  const goToMonth = () => {
    setShowDay(false);
  };

  return (
    <Container>
      <Header>
        <div className="menu-bar">
          <button className="dir" onClick={goToMonth}>
            Month
          </button>
        </div>
        <ul className="month-menu">
          <li>
            <button className="prev" onClick={previousDay}>
              <i className="fas fa-angle-left prev"></i>
            </button>
          </li>
          <li>{new Date(day).toLocaleDateString()}</li>
          <li>
            <button className="next" onClick={nextDay}>
              <i className="fas fa-angle-right next"></i>
            </button>
          </li>
        </ul>
      </Header>
      <div className="notes-section">
        <Note day={day} setShowDay={setShowDay} />
      </div>
    </Container>
  );
}

export default Day;
