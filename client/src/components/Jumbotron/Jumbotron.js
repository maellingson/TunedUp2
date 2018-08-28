import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 200, clear: "both", paddingTop: 25 }}
    className="TunedIn img-fluid"
  >
    {children}
  </div>
);

export default Jumbotron;