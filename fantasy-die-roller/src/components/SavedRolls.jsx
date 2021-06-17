import React from 'react';

function SavedRolls({ handleReroll, handleDelete, dice }){

return (
    <div > 
        {dice.map((dieRoll) =>(
        <div key={dieRoll.id}>
            <h3>Name of Weapon: {dieRoll.rollName}</h3>
            <button onClick={()=>{handleReroll(dieRoll.id)}}>Re Roll</button>
            <button onClick={()=>{handleDelete(dieRoll.id)}}>Delete</button>
        </div>
        ))}
    </div>  
 )}     

export default SavedRolls;