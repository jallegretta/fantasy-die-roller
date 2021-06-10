import React from 'react';
import DiceRoller from './components/DiceRoller';
import ResultList from './components/ResultList';
import SavedRolls from './components/SavedRolls';
function App(){
  return (
    <>
    <DiceRoller />
    <SavedRolls />
    <ResultList />
    </> 
)
}

export default App;
