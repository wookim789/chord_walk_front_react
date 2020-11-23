/**
 * 일반 키보드 입력 이벤트
 */
window.addEventListener("keydown", e => {
    const key = e.key.toUpperCase();
    const audio = document.querySelector(`.keys div[hint-key="${key}"] audio`);
    audio.currentTime = 0;

    let promise = audio.play();
    if(promise !== undefined){
        promise.then(x => {
            return promise.play;
        }).catch(error => {
            console.log(error);
        })
    }
})