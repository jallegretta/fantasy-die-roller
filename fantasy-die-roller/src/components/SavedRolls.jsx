import React from 'react';

function SavedRolls({ rolls, rollName, rollFaces }){



return (
    <div> 
        <h1>Saved Rolls</h1>
        {/* {rolls.map((roll) => ( */}
        <p>
        {rollName} {rollFaces}
        <button>Re Roll </button>
        <button>Delete</button>
        </p>
        {/* ))}  */}
    </div>
        
 )}     

export default SavedRolls;