import React, {useState, setState} from 'react';
import {v4 as uuid } from "uuid";

const DiceRoller = () => {

    const [faces, setFaces] = useState(20)

    function createDie(min, max){
        const newDie = {
            id:uuid(),
            roll: null,
            name: null
        }
        min = Math.ceil(min);
        max = Math.floor(max);
        newDie.roll = Math.floor(Math.random() * (max - min + 1) + min); 
        console.log(newDie)
        
      }
    
    
    return (<div style={{border: "1px solid black"}}>
        <h1>Dice Roller</h1>
        
        <label for="name">How many dice??:</label>
        <input type="text" id="number" name="name" required
        minlength="1" size="3"></input> 
        <br></br>
        <label for="name">How many faces?:</label>
        <input type="text" id="type" name="name" required
        minlength="1" size="3"></input>
        <button onClick={()=>createDie(1,faces)}>Roll your dice!</button>
        <p>Your Current Result: {} </p>
        
      
    </div>
    )
}

export default DiceRoller;