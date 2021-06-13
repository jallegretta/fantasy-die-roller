import React from 'react';

function SavedRolls(props){

return (
    <div style={{border: "0px solid black"}}> 
        <h1>Saved RollsComponent</h1>
        <p>{props.result}</p>
        <button>Re Roll</button>
        <button>Delete</button>
        
    </div>
)
}

export default SavedRolls;