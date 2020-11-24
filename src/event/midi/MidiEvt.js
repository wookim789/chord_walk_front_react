/** 
 * 마스터 키보드 이벤트
 * */
document.addEventListener("DOMContentLoaded", function(){
    // midi 지원 브라우져 체크
    if (navigator.requestMIDIAccess) {
        alert('This browser supports WebMIDI!');
    } else {
        alert('WebMIDI is not supported in this browser.');
    }

    // midi에 점근하는 프로미스에 2가지 함수 매핑
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

    function onMIDISuccess(midiAccess) {
        for (let input of midiAccess.inputs.values()){
            input.onmidimessage = getMIDIMessage;
        }
    }

    function onMIDIFailure() {
        console.log('Could not access your MIDI devices.');
    }

    // 미디 입력 시
    function getMIDIMessage(midiMessage) {
        let cmd = midiMessage.data[0];
        let note = midiMessage.data[1];
        let velocity = midiMessage.data[2];
        console.log(midiMessage)
        if (cmd === 144 && velocity > 0){
            noteOn(note, velocity);
        }
    }

    // 오디오 재생
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