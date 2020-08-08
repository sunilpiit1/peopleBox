import React from "react";
import "./top.css";
import Plus from "./add_sign/add_sign";
import Search from "./search/search.js";
import $ from "jquery";

const addListener = () => {
  $("#main").css("opacity", "0.1");
  $("#main").css("pointer-events", "none");
  $("#detail").css("opacity", "0.1");
  $("#detail").css("pointer-events", "none");
  $("#add_new").css("visibility", "visible");
};

function top(props) {
  return (
    <div className="topBox">
      <Search onsearch={props.onsearch} />
      <Plus onclick={addListener} />
    </div>
  );
}

export default top;
