
import React from "react";
import ReactDOM  from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";
 
function ncard(){
 
  return(
    <Card
    imgsrc={Sdata[0].imgscr}
    sname={Sdata[0].sname }
    title={Sdata[0].title}
    link={Sdata[0].link}
    />

  )

}

ReactDOM.render(
  <>
  <h1> List Of Netflix Series In 2022</h1>
 
  {Sdata.map(ncard)}
  </>,

document.getElementById("root")
);




