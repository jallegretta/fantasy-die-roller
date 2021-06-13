
import React, {useState} from 'react';
import {v4 as uuid } from "uuid";
import "../App"

const DiceRoller = (props) => {
    
    const [faces, setFaces] = useState()



    return (<div style={{border: "1px solid black"}}>
        <h1>Dice Roller</h1>
        <form>
        <label>How many sides??:</label>
        <input type="text" value={faces} onChange={setFaces}></input>
        <button onClick={()=>{createDie(1,faces)}}>Roll your dice!</button>
        </form>
        <p>Your current result:{(props.result)}</p>
           
    </div>
    )
}

export default DiceRoller;