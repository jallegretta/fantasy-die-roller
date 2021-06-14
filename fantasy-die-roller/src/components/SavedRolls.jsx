import React from 'react';

function SavedRolls({ handleReroll, handleDelete, rolls, rollName, rollFaces }){



return (
    <div> 
        <h1>Saved Rolls</h1>
        {/* {rolls.map((roll) => ( */}
        <p>
        <button onClick={handleReroll}>Re Roll {rollName} {rollFaces}</button>
        <button onClick={handleDelete}>Delete</button>
        </p>
        {/* ))}  */}
    </div>
        
 )}     

export default SavedRolls;