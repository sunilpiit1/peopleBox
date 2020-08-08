import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/main.component/main.component";
import Details from "./components/details.component/details";
import AddNew from "./components/add_new.component/add_new";

function App() {
  let [all, setAll] = useState([]);

  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("data"));

    setAll(temp);
  }, []);

  const onSearchHandler = (event) => {
    let temp = JSON.parse(localStorage.getItem("data"));

    let value = event.target.value;
    let temp2 = [];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].name.toLowerCase().search(value.toLowerCase()) === 0) {
        temp2.push(temp[i]);
      }
    }
    setAll(temp2);
  };

  let [default_heading, setDefault_heading] = useState(
    "You can open your Docs here !!"
  );
  let [default_para, setDefault_para] = useState(
    "You can open your Docs by clicking on them and also there is plus sign nect to Search bar by which you can also make Docs and also you can search Your Docs by seacrhing them with their titles"
  );

  const openDocHandler = (event) => {
    let temp = event.target.innerText;
    let item = all.filter((item) => {
      return item.name.trim() === temp;
    });
    setDefault_heading(item[0].name);
    setDefault_para(item[0].notes);
  };

  return (
    <div className="app">
      <Main allDocs={all} openDoc={openDocHandler} search={onSearchHandler} />
      <Details heading={default_heading} notes={default_para} />
      <AddNew />
    </div>
  );
}

export default App;
