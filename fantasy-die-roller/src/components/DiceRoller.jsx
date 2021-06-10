import React from 'react';

const DiceRoller = ({id, result, handleDieRoll}) => {

    function handleDieDoll(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }
      //console.log(handleDieDoll(1 , 8));
    
    return (<div style={{border: "1px solid black"}}>
        <h1>Dice Roller</h1>
        <h3>{id}</h3>
        <p>{result}</p>
        <button onClick={handleDieRoll}>Roll!</button>
    </div>
    )
}

export default DiceRoller;