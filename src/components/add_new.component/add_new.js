import React, { useState } from "react";
import "./add_new.css";
import Summary from "./Summary/summary";
import Title from "./Title/title";

const AddNew = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const onSubmitHandler = () => {
    if (localStorage.getItem("data") == null) {
      localStorage.setItem("data", JSON.stringify([]));
    }
    let item = { name: title, notes: summary };
    let temp = JSON.parse(localStorage.getItem("data"));
    temp.unshift(item);
    localStorage.setItem("data", JSON.stringify(temp));
    window.location = "/";
    // console.log(title);
    //console.log(summary);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const summaryChangeHandler = (event) => {
    setSummary(event.target.value);
    // console.log(summary);
  };

  return (
    <div id="add_new" className="add_new">
      <Title onchange={titleChangeHandler} name="Title" />
      <Summary onchange={summaryChangeHandler} name="Write Notes Here !!" />
      <button onClick={onSubmitHandler} className="btn btn-success font">
        ADD Notes
      </button>
    </div>
  );
};

export default AddNew;
