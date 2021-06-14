import React, {useState} from 'react';
import DiceRoller from './components/DiceRoller';
import ResultList from './components/ResultList';
import SavedRolls from './components/SavedRolls';
import {v4 as uuid } from "uuid";
import './css/App.css';

function App(){
  const [faces, setFaces] = useState()
  const [result, setResult] = useState()
  const [resultList, setResultList] = useState()

  const handleList = (result) => {
      setResultList([...resultList, result]);
  }
  const handleResult = (result)=> {
    setResult(result)
  }
  const handleClick = ()=>{
    createDie(1,faces)
  }

    function createDie(min, max){
      const newDie = {
          id:uuid(),
          roll: null,
          name: null
      }
      min = Math.ceil(min);
      max = Math.floor(max);
      handleList(handleResult(newDie.roll = Math.floor(Math.random() * (max - min + 1) + min))); 
      console.log(newDie.roll);
      return newDie.roll;
      
    }
  
  return (
    <>
    <DiceRoller result = {result} handleClick= {handleClick} createDie = {createDie} setFaces = {setFaces}/>
    <SavedRolls />
    <ResultList result = {result}/>
    </> 
)
}

export default App;
