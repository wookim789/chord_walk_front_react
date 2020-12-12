import React from "react";
import '../../CSS/view/DropBox.css';

function DropBox(props) {
    const scale = setScale(props);
    return (
        <div className="dropdown">
            <button className="dropbtn">Select Key</button>
            <div className="dropdown-content">
                {scale}
            </div>
        </div>
    )

    function setScale(props) {
        const sArr = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const elementArr = [];
        sArr.forEach(s => {
            elementArr.push(<a key={s} href={()=> '#'} onClick={() => {clickScale(props, s)}}>{s}</a>);
        })
        return elementArr;
    }

    function clickScale(props, s){
        let copy = [...props.scaleKey];
        copy = s;
        props.funcScaleKey(copy);
        getScale(s); 
    }
    
    async function getScale(key){ // cors 요청 get 요청 및 json 데이터 사용을 위한 처리
        try{
            let response = await requestScale(key);
            if(response.ok){
                let json = await response.json();
                let tbody = document.getElementById('scaleTableBody');

                if(tbody.rows.length > 1){
                    tbody.deleteRow(1);
                }

                let newCell = tbody.insertRow();
                json.scale.forEach(s =>{
                    let newText = document.createElement('TH');
                    newText.innerHTML = s;
                    newCell.appendChild(newText);
                });
            }
        }catch(error){
            console.log(error);
        }
    }

    function requestScale(key){
        let url = 'http://ec2-3-35-49-217.ap-northeast-2.compute.amazonaws.com:8000/getScale/' + key;
        return fetch(url)
    }
}

export default DropBox;

