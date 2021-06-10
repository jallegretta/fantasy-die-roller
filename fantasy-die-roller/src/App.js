import React from 'react';
import DiceRoller from './components/DiceRoller';
import ResultList from './components/ResultList';
import SavedRolls from './components/SavedRolls';
import './css/App.css';

function App(){

  return (
    <>
    <DiceRoller />
    <SavedRolls />
    <ResultList className='list'/>
    </> 
)
}

export default App;
