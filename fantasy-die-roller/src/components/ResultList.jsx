//Display the result

import React from 'react';
import '../css/ResultList.css';

function ResultList({result, resultList}){
    
    
return (
    <div style={{border: "0px solid black"}}>      
        <h1>Result List</h1>
        <p> Your Current Roll:{result}</p>
        <p> {resultList} </p>
    </div>
);
}

export default ResultList;