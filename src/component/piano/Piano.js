import React, { useState } from "react";
import './keys/Key';
import '../../CSS/piano/Piano.css';
import Key from "./keys/Key";
function Piano(){
    // const data set
    const pianoDatas = setPianoData();
    let keyDataList = setComponentData(pianoDatas);
    let [keyData, setKeyData] = useState(keyDataList);

    return (
    <div>
      <section id="wrap">
        <h2>code by https://codepen.io/gabrielcarol/pen/rGeEbY</h2>
        <section id="main">
          <div className="nowplaying"></div>
          <div className="keys">
            { keyData }
          </div>
          </section>
      </section>
    </div>
    );
}

function setPianoData(){
    const key = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]
    const kind = ["key", "key sharp", "key", "key sharp", "key", "key", "key sharp", "key", "key sharp", "key", "key sharp", "key", "key", "key sharp", "key", "key sharp", "key"];
    const note = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'];
    const hint = ['A', 'W', 'S', 'E', 'D', 'F', 'T', 'G', 'Y', 'H', 'U', 'J', 'K', 'O', 'L', 'P', ';'];
    return [key, kind, note, hint];
}

function setComponentData(pianoDatas){
    let [key, kind, note, hint] = [pianoDatas[0], pianoDatas[1], pianoDatas[2], pianoDatas[3]]
    let keyDataList = [];
    for(var i = 0; i < key.length; i++){
        let tmp = <Key key={key[i]} dataNumKey={key[i]} keyKind={kind[i]} noteName={note[i]} hintKey={hint[i]}/>
        keyDataList.push(tmp)
    }
    return keyDataList;
}
export default Piano;



 