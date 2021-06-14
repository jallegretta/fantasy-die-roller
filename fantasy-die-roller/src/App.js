import React, {useState} from 'react';
import DiceRoller from './components/DiceRoller';
import ResultList from './components/ResultList';
import SavedRolls from './components/SavedRolls';
import {v4 as uuid } from "uuid";
import './css/App.css';
import { useEffect } from 'react/cjs/react.development';

function App(){
  const [faces, setFaces] = useState()
  const [rollName, setRollName] = useState()
  const [result, setResult] = useState()
  const [resultList, setResultList] = useState()
  const [rolls, setRolls] = useState(null);

  useEffect(()=>{
      fetch('https://allegretta-json-api.herokuapp.com/rolls')
          .then(res => {
              return res.json();
          })
          .then(data => {
              console.log(data);
              setRolls(data)
          });
  },[]);

  const handleResult = (result)=> {
    setResult(result)
  }
  const handleRoll = ()=>{
    createDie(1,faces)
    setResultList(result);
  }
  const savedDie = { faces };
  const handleSave = ()=>{
    fetch('https://allegretta-json-api.herokuapp.com/rolls', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(savedDie)
    })
  };

    function createDie(min, max){
      const newDie = {
          id:uuid(),
          roll: null,
          name: null
      }
      min = Math.ceil(min);
      max = Math.floor(max);
      handleResult(newDie.roll = Math.floor(Math.random() * (max - min + 1) + min)); 
      console.log(newDie.roll);
      return newDie.roll;
      
    }
  
  return (
    <>
    <DiceRoller setRollName = {setRollName} rollName = {rollName} handleSave = {handleSave} resultList = {resultList} result = {result} handleRoll= {handleRoll} createDie = {createDie} setFaces = {setFaces}/>
    {rolls && <SavedRolls rollName = {rolls.name} rollFaces = {rolls.faces} />}
    <ResultList result = {result}/>
    </> 
)
}

export default App;
