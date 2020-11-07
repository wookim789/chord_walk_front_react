import React, {useState} from "react";

function Key(props){
    return(
      <div data-key={ props.dataNumKey } className={ props.keyKind} data-note= { props.noteName }>
        <span className="hints"> { props.hintKey } </span>
        <audio data-key="65" src="http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav"></audio>
      </div>
      
    )
}
export default Key;

