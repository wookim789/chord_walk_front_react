import React, { useState } from "react";
import './keys/Key';
import '../../CSS/piano/Piano.css';
import Key from "./keys/Key";
function Piano(){
    const key = [65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186]
    const kind = ["key", "key sharp", "key", "key sharp", "key", "key", "key sharp", "key", "key sharp", "key", "key sharp", "key", "key", "key sharp", "key", "key sharp", "key"]
    const note = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']
    const hint = ['A', 'W', 'S', 'E', 'D', 'F', 'T', 'G', 'Y', 'H', 'U', 'J', 'K', 'O', 'L', 'P', ';']

    var keyDataList = []
    for(var i = 0; i < key.length; i++){
        var tmp = <Key key={key[i]} dataNumKey={key[i]} keyKind={kind[i]} noteName={note[i]} hintKey={hint[i]}/>
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
            { keyStates }
          </div>
          </section>
      </section>
    </div>
    );
}
export default Piano;



 