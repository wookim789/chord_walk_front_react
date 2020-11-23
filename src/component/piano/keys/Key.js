import React from "react";

function Key(props){
  
  const setWavFile = setWavData;
  return(
    <div data-key={ props.dataNumKey } className={ props.keyKind} data-note={ props.noteName } hint-key={props.hintKey}
         onClick= { (e) => { 
            const audio = e.target.querySelector('audio');
            audio.currentTime = 0;
            audio.play()
         }}>
      <span  className="hints"> { props.hintKey } </span>
      <audio data-key={ props.dataNumKey } src={ setWavFile(props.dataNumKey) } autoPlay></audio>
    </div>
  )
}

function setWavData(key){
  const wavMap = {48 : '040.wav', 49 : '041.wav', 50 : '042.wav', 51 : '043.wav', 52 : '044.wav', 53 : '045.wav', 54 : '046.wav', 55 : '047.wav'
                , 56 : '048.wav', 57 : '049.wav', 58 : '050.wav', 59 : '051.wav', 60 : '052.wav', 61 : '053.wav', 62 : '054.wav', 63 : '055.wav', 64 : '056.wav'}
  return "http://carolinegabriel.com/demo/js-keyboard/sounds/" + wavMap[key];
}
export default Key;