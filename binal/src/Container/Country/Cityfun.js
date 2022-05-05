import React, { useState } from 'react';

function Cityfun(props) {
    const[City, setCity]=useState('Mumbai')

    const[gdp, setGdp]=useState(2)

    const ChangeCity=()=>{
        setCity('Ahemdabad')
    }
    return (
        <div>
            <p>City[Funtion based component] : {City}</p>
            <button onClick={()=>ChangeCity()}>Change</button>
            <p>GDP:{gdp}</p>
            <button onClick={()=>setGdp(10)}>Change</button>
        </div>
    );
}

export default Cityfun;