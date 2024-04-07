import React, { useState } from "react";
import "./Calendar.css";
import Weekdays from "../components/weekdays/Weekdays";
import Month from "../components/month/Month";
import Days from "../components/days/Days";
import Container from "../components/container/Container";
import Day from "../components/day/Day";

function Calendar2() {
  const [date, setDate] = useState(new Date());
  const [showDay, setShowDay] = useState();

  return (
    <>
      {showDay ? (
        <Day day={date} setDate={setDate} setShowDay={setShowDay} />
      ) : (
        <Container>
          <Month date={date} setDate={setDate} />
          <Weekdays />
          <Days day={date} setDate={setDate} setShowDay={setShowDay} />
        </Container>
      )}
    </>
  );
}

export default Calendar2;
