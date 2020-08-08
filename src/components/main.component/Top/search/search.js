import React from "react";
import "./search.css";

function search(props) {
  return (
    <div className="search">
      <input
        onChange={props.onsearch}
        className="searchBox"
        type="text"
        placeholder="Search..."
      ></input>
      <span className="material-icons position">search</span>
    </div>
  );
}

export default search;
