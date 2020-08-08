import React from "react";
import "./title.css";

function title(props) {
  return (
    <div className="title_1">
      {props.name}
      <input
        onChange={props.onchange}
        type="text"
        placeholder="Enter Title here ...."
        className="title_input"
      ></input>
    </div>
  );
}

export default title;
