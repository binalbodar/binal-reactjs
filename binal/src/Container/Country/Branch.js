import React, { useState } from 'react';
import Course from './Course';

function Branch(props) {
    const [Branch, setBranch]=useState('RNW1')
    const ChangeBranch=()=>{
        setBranch('RNW2')
    }
    return (
        <>
        <div>
                <p>Branch Name:{Branch}</p>
                <button onClick={() =>ChangeBranch()}>Change</button>
        </div>
            <Course chacou={Branch}/>
        </>
    );
}

export default Branch;