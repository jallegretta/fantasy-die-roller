//Display the result

import React from 'react';
import '../css/ResultList.css';

function ResultList(props){
return (
    <div style={{border: "0px solid black"}}>      
        <h1>Result List</h1>
        <p>{props.result}</p>
    </div>
);
}

export default ResultList;