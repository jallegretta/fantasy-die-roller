import React from 'react';

function SavedRolls({ handleRoll, dice, savedDie, id }){
    const diceID = {id}
    const handleReroll = (id)=> {
        fetch(`https://allegretta-json-api.herokuapp.com/rolls/${diceID}`, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
        .then(res => {
          return res.json();
      })
      .then(dice => {
          console.log(dice);
          console.log(id);
          handleRoll(dice.faces)
      });
      }

      const handleDelete = ()=> {
        fetch(`https://allegretta-json-api.herokuapp.com/rolls/${id}`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(savedDie)
        })
      }

return (
    <div > 
        {dice.map((dieRoll) =>(
        <div key={dieRoll.id}>
            <h3>Name of Weapon:  {dieRoll.rollName}</h3>
            <button onClick={()=>{handleReroll(id)}}>Re Roll</button>
            <button onClick={()=>{handleDelete(dieRoll.id)}}>Delete</button>
        </div>
        ))}
    </div>  
 )}     

export default SavedRolls;