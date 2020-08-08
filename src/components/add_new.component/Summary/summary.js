import React from "react";
import "./summary.css";

function summary(props) {
  return (
    <div className="summary_1">
      {props.name}
      <textarea
        onChange={props.onchange}
        placeholder="......."
        class="summary_textarea"
      ></textarea>
    </div>
  );
}

export default summary;
