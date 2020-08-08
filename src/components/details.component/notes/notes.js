import React from "react";
import "./notes.css";

function notes(props) {
  let temp = props.notes.charAt(0).toUpperCase() + props.notes.slice(1);
  return <div className="notes1">{temp}</div>;
}

export default notes;
