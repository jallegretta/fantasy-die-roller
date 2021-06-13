import React, {useState, setState} from 'react';
import DiceRoller from './components/DiceRoller';
import ResultList from './components/ResultList';
import SavedRolls from './components/SavedRolls';
import {v4 as uuid } from "uuid";
import './css/App.css';

function App(){

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
    <DiceRoller />
    <SavedRolls />
    <ResultList />
    </> 
)
}

export default App;
