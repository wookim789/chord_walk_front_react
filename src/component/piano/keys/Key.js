import React, {useState} from "react";

function Key(props){
  const wavMap = {65 : '040.wav', 87 : '041.wav', 83 : '042.wav', 69 : '043.wav', 68 : '044.wav', 70 : '045.wav', 84 : '046.wav', 71 : '047.wav', 89 : '048.wav', 72 : '049.wav', 85 : '050.wav', 74 : '051.wav', 75 : '052.wav', 79 : '053.wav', 76 : '054.wav', 80 : '055.wav', 186 : '056.wav'}
  const setWavFile = (key) => {
    return "http://carolinegabriel.com/demo/js-keyboard/sounds/" + wavMap[key];
  };
  const soundPlay = (e) =>{
    console.log(e.key);
  };
  return(
    <div data-key={ props.dataNumKey } className={ props.keyKind} data-note= { props.noteName }>
      <span  className="hints"> { props.hintKey } </span>
      <audio data-key={ props.dataNumKey } src={ setWavFile(props.dataNumKey) }></audio>
    </div>
  )
}
export default Key;

