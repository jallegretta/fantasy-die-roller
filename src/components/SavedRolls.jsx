import React from 'react';

function SavedRolls({ handleRoll, dice, savedDie, refreshPage }) {

  const handleReroll = (id) => {
    fetch(`https://allegretta-json-api.herokuapp.com/rolls/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        return res.json();
      })
      .then(dice => {
        console.log(dice);
        handleRoll(dice.faces)
      });
  }

  const handleDelete = (id) => {
    fetch(`https://allegretta-json-api.herokuapp.com/rolls/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(savedDie)
    })//.then (refreshPage)
  }

  return (
    <div >
      <h2>Saved Rolls</h2>
      {dice.map((dieRoll) => (
        <div key={dieRoll.id}>
          <h3>Name of Weapon:  {dieRoll.rollName}</h3>
          <button onClick={() => { handleReroll(dieRoll.id) }}>Re Roll</button>
          <button onClick={() => { handleDelete(dieRoll.id) }}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default SavedRolls;