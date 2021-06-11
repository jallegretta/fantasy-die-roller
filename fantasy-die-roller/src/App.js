import React from 'react';
import DiceRoller from './components/DiceRoller';
import ResultList from './components/ResultList';
import SavedRolls from './components/SavedRolls';
import {v4 as uuid } from "uuid";
import './css/App.css';

function App(props){




  return (
    <>
    <DiceRoller 
      id={uuid()}
      roll= {null}
      name= {null}
    />
    <SavedRolls />
    <ResultList />
    </> 
)
}

export default App;
