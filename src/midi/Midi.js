document.addEventListener("DOMContentLoaded", function(){
    if (navigator.requestMIDIAccess) {
        alert('This browser supports WebMIDI!');
    } else {
        alert('WebMIDI is not supported in this browser.');
    }

    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

    function onMIDIFailure() {
        console.log('Could not access your MIDI devices.');
    }

    function onMIDISuccess(midiAccess) {
        for (let input of midiAccess.inputs.values()){
            input.onmidimessage = getMIDIMessage;
        }
    }
    
    function getMIDIMessage(midiMessage) {
        console.log(midiMessage);
        if (48 <= midiMessage.data[1] && midiMessage.data[1] <= 64){

            let promise = document.querySelector(`audio[data-key="${midiMessage.data[1]}"]`).play();

            if (promise !== undefined) {
                promise.then(a => {
                    return promise.play;
                }).catch(error => {
                    console.log(error);
                }); 
            }
        }
    }
    function playNote(keyCode){
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        console.log('aaaaaaaaaa')
        if (!key) return;
      
        key.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
    }
});