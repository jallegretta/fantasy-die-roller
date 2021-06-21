
import React from 'react';
import "../App"

const DiceRoller = ({ setRollName, rollName, handleSave, handleRoll, setFaces, faces }) => {

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
        <button onClick={()=>{handleRoll()}}>Roll your dice!</button>
        <div></div>
        <label>Give a name to save</label>
        <input 
            type="text"
            value={rollName}
            onChange= {(e)=> setRollName(e.target.value)}    
        />
        <button onClick={()=>{handleSave()}}>Save this roll!</button>
        </form>
           
    </div>
    )
}

export default DiceRoller;