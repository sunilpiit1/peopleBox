import React from "react";
import "./main.component.css";
import Top from "./Top/top";
import Heading from "./headings/heading";
//import Button from "./button/button";

function main(props) {
  let data = props.allDocs;

  //console.log(data);

  let renderingHandler = () => {
    if (data != null) {
      return data.map((element) => {
        return <Heading onclick={props.openDoc} mainHeading={element.name} />;
      });
    }
  };

  return (
    <div className="main" id="main">
      <Top onsearch={props.search} />
      <div className="bottomBox">{renderingHandler()}</div>
    </div>
  );
}

export default main;
