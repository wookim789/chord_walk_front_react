/* eslint-disable */
import React, { useState } from "react"
import "./CSS/common/App.css";
import Piano from "./component/piano/Piano";
import "./event/midi/MidiEvt";
import "./event/KeyboardEvt"
import DropBox from "./component/view/DropBox"

function App() {
  // ES6 destructurning 문법
  let posts = ["sclae", "chord", "diatonic"];
  let [subject, funcSubject] = useState(posts);
  
  let days = ["2020.11.01", "2020.11.02", "2020.11.03"];
  let [day, funcDay] = useState(days);

  let [likeCnt, funcLikeCnt] = useState(0);

  let [scaleKey, funcScaleKey] = useState("");
  const table = setScaleTableHeader();
  function changeSubject(){
      let copySubject = [...subject];
      if(copySubject[0] == "sclae"){
          copySubject[0] = "Scale";
      }else{
        copySubject[0] = "sclae";
      }
      funcSubject(copySubject);
  }

  function setScaleTableHeader(){
      let table = [];
      for(let i = 1; i < 8; i++){
          table.push(<th key={"scaleTableHeader-"+i}>{i}</th>);
      }
      return table;
  }
  return (
    // jsx 문법 (html 대신) : class -> className
    <div className="App">
        <div className="black-nav">
            <div>Chord walk</div>
        </div>
        <button onClick = { ()=>{ changeSubject() } } >버튼</button>
        <h1 id="currentKey">Scale Key : {scaleKey}</h1>

        <table className='scaleTable'>
          <tbody id='scaleTableBody'>
            <tr key="scaleTableHeader">{table}</tr>
          </tbody>
        </table>

        <div className="list">
            <h3> { subject[0] } 
                <span onClick = { ()=> { funcLikeCnt(likeCnt + 1) } } >👍</span> {likeCnt} 
            </h3>
            <DropBox scaleKey={scaleKey} funcScaleKey={funcScaleKey}/>
            <p> { day[0] } </p>
            <hr/>
            <h3> { subject[1] } </h3>
            <p> { day[1] } </p>
            <hr/>
            <h3> { subject[2] } </h3>
            <p> { day[2] } </p>
            <hr/>
        </div>
        <Piano/>
    </div>
  );
}
export default App;
