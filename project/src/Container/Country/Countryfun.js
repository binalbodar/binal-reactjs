import React, { useState } from 'react';
import Cityfun from './Cityfun';

function Countryfun({gdpval}) {
    const[Country, setCountry]=useState('India')

    const[gdp, setGdp]=useState(0)

    const ChangeCountry=()=>{
        setCountry('UK')
    }
    return (
        <>
        <div>
            <p>Country[Funtion based component] : {Country}</p>
            <button onClick={()=>ChangeCountry()}>Change</button>
            <p>GDP:{gdp}</p>
            <button onClick={()=>setGdp(gdpval)}>Change</button>
        </div> 
        <Cityfun fampla={Country}/>
        </>
    );
}

export default Countryfun;