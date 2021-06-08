import React from 'react';
import DiceRoller from './DiceRoller';
import ResultList from './ResultList';
import SavedRolls from './SavedRolls';
//import './src/css/DiceTray.css';

function DiceTray(){
return (
    <>
    <DiceRoller />
    <ResultList />
    <SavedRolls />
    </> 
)
}


export default DiceTray;