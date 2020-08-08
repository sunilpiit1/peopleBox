import React from "react";
import "./heading.css";

let temp = new Date();

function heading(props) {
  //console.log(props);
  return (
    <div className="heading">
      <div className="mainHeading" onClick={props.onclick}>
        {props.mainHeading}
      </div>
      <div className="date">
        {" "}
        Created on{" "}
        {`${temp.getDate()}/${temp.getMonth() + 1}/${temp.getFullYear()}`}
      </div>
      <hr style={{ margin: 0, padding: 0 }}></hr>
    </div>
  );
}

export default heading;
