import React from "react";

import "./Container.css";

function Container({ children }) {
  return (
    <div className="container">
      <div className="calendar">{children}</div>
    </div>
  );
}

export default Container;
