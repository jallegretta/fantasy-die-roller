import React, {useState} from 'react';
import DiceRoller from './components/DiceRoller';
import ResultList from './components/ResultList';
import SavedRolls from './components/SavedRolls';
import {v4 as uuid } from "uuid";
import './css/App.css';

function App(){
  const [faces, setFaces] = useState(6)
  
  const handleClick = (e)=>{
    setFaces(faces)
    createDie(1,faces)
    e.preventDefault();
  }
    function createDie(min, max){
      const newDie = {
          id:uuid(),
          roll: null,
          name: null
      }
      min = Math.ceil(min);
      max = Math.floor(max);
      newDie.roll = Math.floor(Math.random() * (max - min + 1) + min); 
      console.log(newDie.roll) ;
     
    }
  
  return (
    <>
    <DiceRoller handleClick= {handleClick} createDie = {createDie} setFaces = {setFaces}/>
    <SavedRolls />
    <ResultList />
    </> 
)
}

export default App;
