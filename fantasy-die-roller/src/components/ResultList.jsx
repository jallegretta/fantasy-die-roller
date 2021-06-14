//Display the result

import React from 'react';
import { useState } from 'react/cjs/react.development';
import '../css/ResultList.css';



function ResultList({result}){
    
    
    const [resultList, setResultList] = useState()

    const handleList = (result) => {
        setResultList([...resultList, result]);
    }

return (
    <div style={{border: "0px solid black"}}>      
        <h1>Result List</h1>
        <p> Your Current Roll:{result}</p>
        <p> {resultList} </p>
    </div>
);
}

export default ResultList;