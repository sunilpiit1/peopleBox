import React from "react";
import "./heading.css";

function heading(props) {
  let temp = props.heading.charAt(0).toUpperCase() + props.heading.slice(1);
  return <h1 className="h_heading">{temp}</h1>;
}

export default heading;
