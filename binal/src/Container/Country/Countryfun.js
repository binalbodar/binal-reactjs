import React, { useState } from 'react';

function Countryfun(props) {
    const[Country, setCountry]=useState('India')

    const[gdp, setGdp]=useState(0)

    const ChangeCountry=()=>{
        setCountry('UK')
    }
    return (
        <div>
            <p>Country[Funtion based component] : {Country}</p>
            <button onClick={()=>ChangeCountry()}>Change</button>
            <p>GDP:{gdp}</p>
            <button onClick={()=>setGdp(5.5)}>Change</button>
        </div>
    );
}

export default Countryfun;