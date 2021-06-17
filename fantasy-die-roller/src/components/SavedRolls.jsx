import React from 'react';

function SavedRolls({ handleRoll, dice, savedDie }){


    const handleReroll = ()=> {
        fetch(`https://allegretta-json-api.herokuapp.com/rolls/${dice.id}`, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
        .then(res => {
          return res.json();
      })
      .then(dice => {
          console.log(dice);
          handleRoll(dice.faces)
      });
      }

      const handleDelete = ()=> {
        fetch(`https://allegretta-json-api.herokuapp.com/rolls/${savedDie.id}`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(savedDie)
        })
      }

return (
    <div > 
        {dice.map((dieRoll) =>(
        <div key={dieRoll.id}>
            <h3>Name of Weapon: {dieRoll.rollName}</h3>
            <button onClick={()=>{handleReroll()}}>Re Roll</button>
            <button onClick={()=>{handleDelete()}}>Delete</button>
        </div>
        ))}
    </div>  
 )}     

export default SavedRolls;