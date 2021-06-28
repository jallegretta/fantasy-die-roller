import React, { useState } from 'react';
import DiceRoller from './components/DiceRoller';
import ResultList from './components/ResultList';
import SavedRolls from './components/SavedRolls';
import { v4 as uuid } from "uuid";
import './css/App.css';
import { useCallback, useEffect } from 'react/cjs/react.development';

function App() {
  const [faces, setFaces] = useState()
  const [rollName, setRollName] = useState()
  const [id] = useState()
  const [result, setResult] = useState()
  const [dice, setDice] = useState([])
  const savedDie = { id, rollName, faces }

// function refreshPage(){
//   window.location.reload(true);
// }

  useEffect(() => {
    fetch(`https://allegretta-json-api.herokuapp.com/rolls`)
      .then(res => {
        return res.json();
      })
      .then(dice => {
        setDice(dice)
        console.log(dice)
        console.log('useEffect loding rolls from API fetch')
      });
  }, [dice]);

  const handleSave = () => {
    fetch(`https://allegretta-json-api.herokuapp.com/rolls/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(savedDie)
    })//.then (refreshPage)
  };

  const handleUpdate = () => {
    fetch(`https://allegretta-json-api.herokuapp.com/rolls/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(savedDie)
    })
  }

  const handleRoll = () => {
    createDie(1, faces)
  }

  const handleResult = (result) => {
    setResult(result)
  }

  function createDie(min, max) {
    const newDie = {
      id: uuid(),
      roll: null,
      name: null
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    handleResult(newDie.roll = Math.floor(Math.random() * (max - min + 1) + min));
    return newDie.roll;

  }

  return (
    <>
      <DiceRoller
        setFaces={setFaces}
        createDie={createDie}
        handleRoll={handleRoll}
        setRollName={setRollName}
        handleSave={handleSave}
        rollName={rollName}
        result={result}
        id={dice.id}
      />

      <SavedRolls
        handleRoll={handleRoll}
        savedDie={savedDie}
        dice={dice}
        id={dice.id}
        //refreshPage = {refreshPage}
      />

      <ResultList result={result} />
    </>
  )
}

export default App;