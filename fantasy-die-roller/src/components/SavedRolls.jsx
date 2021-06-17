import React from 'react';
import { useState } from 'react/cjs/react.development';

function SavedRolls({ handleReroll, handleDelete }){

const [dice, setDice]= useState([()=> {
    fetch('https://allegretta-json-api.herokuapp.com/rolls', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(res => {
      return res.json();
  })
  .then(dice => {
      console.log(dice);
  });
  }]);

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