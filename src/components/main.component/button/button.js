import React from "react";
import "./button.css";

function button(props) {
  return (
    <div>
      <button className="btn btn-primary buttonComp">{props.name}</button>
    </div>
  );
}

export default button;
