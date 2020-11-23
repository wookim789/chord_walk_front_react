/** 
 * 마스터 키보드 이벤트
 * */
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
        let cmd = midiMessage.data[0];
        let note = midiMessage.data[1];
        let velocity = midiMessage.data[2];
        // eslint-disable-next-line default-case
        if (cmd === 144 && velocity > 0){
            noteOn(note, velocity);
        }
    }
    function noteOn(note, velocity){
        if (48 <= note && note <= 64){
            const audio = document.querySelector(`audio[data-key="${note}"]`);
            audio.currentTime = 0;

            let promise = audio.play();
            if(promise !== undefined){
                promise.then(x => {
                    return promise.play;
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }
});