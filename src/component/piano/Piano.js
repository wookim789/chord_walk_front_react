import React, { useState } from "react";
import './keys/Key';
import '../../CSS/piano/Piano.css';
import Key from "./keys/Key";
function Piano(){
    const dataKeyArr = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186]
    const keyArr = ["key", "key sharp", "key", "key sharp", "key", "key", "key sharp", "key", "key sharp", "key", "key sharp", "key", "key", "key sharp", "key", "key sharp", "key"]
    const noteNameArr = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']
    const hintKeyArr = ['A', 'W', 'S', 'E', 'D', 'F', 'T', 'G', 'Y', 'H', 'U', 'J', 'K', 'O', 'L', 'P', ';']

    var keyDataList = []
    for(var i = 0; i < dataKeyArr.length; i++){
        var tmp = [];
        tmp.push(dataKeyArr[i])
        tmp.push(keyArr[i])
        tmp.push(noteNameArr[i])
        tmp.push(hintKeyArr[i])
        keyDataList.push(tmp)
    }
    let [keyStates, funcKeyStates] = useState(keyDataList);
    return (
    <div>
      <section id="wrap">
        <h2>code by https://codepen.io/gabrielcarol/pen/rGeEbY</h2>
        <section id="main">
          <div className="nowplaying"></div>
          <div className="keys">
              { () => {
                for(var i = 0; i < dataKeyArr.length; i++){
                  var keyState = keyStates[i]
                  keyState.map((index, keyKind, noteName, hintKey) => (
                      <Key dataNumKey={index} keyKind={keyKind} noteName={noteName} hintKey={hintKey}></Key>
                  ))
                }
              }
            }
            {/* <Key dataNumKey="65" keyKind="key" noteName='C' hintKey='A'></Key>
            <Key dataNumKey="87" keyKind="key sharp" noteName='C#' hintKey='W'></Key>
            <Key dataNumKey="83" keyKind="key" noteName='D' hintKey='S'></Key>
            <Key dataNumKey="69" keyKind="key sharp" noteName='D#' hintKey='E'></Key>
            <Key dataNumKey="68" keyKind="key" noteName='E' hintKey='D'></Key>
            <Key dataNumKey="70" keyKind="key" noteName='F' hintKey='F'></Key>
            <Key dataNumKey="84" keyKind="key sharp" noteName='F#' hintKey='T'></Key>
            <Key dataNumKey="71" keyKind="key" noteName='G' hintKey='G'></Key>
            <Key dataNumKey="89" keyKind="key sharp" noteName='G#' hintKey='Y'></Key>
            <Key dataNumKey="72" keyKind="key" noteName='A' hintKey='H'></Key>
            <Key dataNumKey="85" keyKind="key sharp" noteName='A#' hintKey='U'></Key>
            <Key dataNumKey="74" keyKind="key" noteName='B' hintKey='J'></Key>
            <Key dataNumKey="75" keyKind="key" noteName='C' hintKey='K'></Key>
            <Key dataNumKey="79" keyKind="key sharp" noteName='C#' hintKey='O'></Key>
            <Key dataNumKey="76" keyKind="key" noteName='D' hintKey='L'></Key>
            <Key dataNumKey="80" keyKind="key sharp" noteName='D#' hintKey='P'></Key>
            <Key dataNumKey="186" keyKind="key" noteName='E' hintKey=';'></Key> */}
          </div>

          <audio data-key="65" src="http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav"></audio>
          <audio data-key="87" src="http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav"></audio>
          <audio data-key="83" src="http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav"></audio>
          <audio data-key="69" src="http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav"></audio>
          <audio data-key="68" src="http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav"></audio>
          <audio data-key="70" src="http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav"></audio>
          <audio data-key="84" src="http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav"></audio>
          <audio data-key="71" src="http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav"></audio>
          <audio data-key="89" src="http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav"></audio>
          <audio data-key="72" src="http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav"></audio>
          <audio data-key="85" src="http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav"></audio>
          <audio data-key="74" src="http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav"></audio>
          <audio data-key="75" src="http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav"></audio>
          <audio data-key="79" src="http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav"></audio>
          <audio data-key="76" src="http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav"></audio>
          <audio data-key="80" src="http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav"></audio>
          <audio data-key="186" src="http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"></audio>
          </section>
      </section>
    </div>
    );
}
export default Piano;