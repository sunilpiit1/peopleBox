import React from "react";
import "./add_sign.css";

function add_sign(props) {
  return (
    <div className="add_outerbox" onClick={props.onclick}>
      <div className="horizontal"></div>
      <div className="vertical"></div>
    </div>
  );
}

export default add_sign;
