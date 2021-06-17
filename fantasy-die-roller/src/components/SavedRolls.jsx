import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';

function SavedRolls({ handleReroll, handleDelete }){

useEffect(()=>{
    fetch('https://allegretta-json-api.herokuapp.com/rolls')
        .then(res => {
            return res.json();
        })
        .then(dice => {
            setDice(dice);
            console.log(dice)
        });
},[]);
const [dice, setDice]= useState([]);
return (
    <div > 
        {dice.map((dieRoll) =>(
        <div key={dieRoll.id}>
            <h3>Name of Weapon: {dieRoll.rollName}</h3>
            <button onClick={handleReroll}>Re Roll</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
        ))}
    </div>  
 )}     

export default SavedRolls;