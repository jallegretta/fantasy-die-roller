//roll the dice
//pass the result to the result list
//allow the user to enter a name for the roll and save it

import React from 'react';

const DiceRoller = ({id, handleDieRoll}) => {

    function handleDieDoll(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
        
      }
      //const result = handleDieDoll(1 , 8);
    
    return (<div style={{border: "1px solid black"}}>
        <h1>Dice Roller</h1>
        <h3>{id}</h3>
        <label for="name">How many dice??:</label>
        <input type="text" id="number" name="name" required
        minlength="1" size="3"></input> 
        <br></br>
        <label for="name">How many faces?:</label>
        <input type="text" id="type" name="name" required
        minlength="1" size="3"></input>
        <button onClick={handleDieRoll}>Roll your dice!</button>
        <p>result{}</p>
        
      
    </div>
    )
}

export default DiceRoller;