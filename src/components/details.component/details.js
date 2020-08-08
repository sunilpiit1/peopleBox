import React from "react";
import "./details.css";
import Heading from "./heading/heading";
import Notes from "./notes/notes";

function details(props) {
  return (
    <div className="detail" id="detail">
      <Heading heading={props.heading}></Heading>
      <Notes notes={props.notes} />
    </div>
  );
}

export default details;
