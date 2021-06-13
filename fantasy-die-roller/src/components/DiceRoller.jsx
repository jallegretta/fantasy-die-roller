
import React from 'react';
import "../App"

const DiceRoller = ({ handleClick, createDie, setFaces, result, faces }) => {

const handleSubmit = (e) => {
    e.preventDefault();
}

    return (<div style={{border: "1px solid black"}}>
        <h1>Dice Roller</h1>
        <form onSubmit={handleSubmit}>
        <label>How many sides??:</label>
        <input 
            type="text"
            value={faces}
            onChange= {(e)=> setFaces(e.target.value)}    
        />
        <button onClick={()=>{handleClick()}}>Roll your dice!</button>
        </form>
        <p>Your current result:{(result)}</p>
           
    </div>
    )
}

export default DiceRoller;