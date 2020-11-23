/* eslint-disable */
import React, { useState } from 'react'
import './CSS/common/App.css';
import Piano from './component/piano/Piano';
import './event/midi/MidiEvt';
import './event/KeyboardEvt'

function App() {
  // ES6 destructurning 문법
  let posts = ["sclae", "chord", "diatonic"];
  let [subject, funcSubject] = useState(posts);
  
  let days = ["2020.11.01", "2020.11.02", "2020.11.03"];
  let [day, funcDay] = useState(days);

  let [likeCnt, funcLikeCnt] = useState(0);

  function changeSubject(){
      let copySubject = [...subject]
      if(copySubject[0] == 'sclae'){
          copySubject[0] = 'Scale'
      }else{
        copySubject[0] = 'sclae'
      }
      funcSubject(copySubject)
  }
  return (
    // jsx 문법 (html 대신) : class -> className
    <div className="App">
        <div className="black-nav">
            <div>Chord walk</div>
        </div>
        <button onClick = { ()=>{ changeSubject() } } >버튼</button>
        <div className="list">
            <h3> { subject[0] } 
                <span onClick = { ()=> { funcLikeCnt(likeCnt + 1) } } >👍</span> {likeCnt} 
            </h3>
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
