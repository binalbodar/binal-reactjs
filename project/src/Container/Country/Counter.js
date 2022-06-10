import React, { useState } from 'react';

function Counter(props) {
    const [count, setcount]= useState(0)

    const incrementcounter = ()=>{
        if(count >= 10){

        }else{
            setcount(()=>count+1)
        }
    }

    const decrementcounter=()=>{
        if(count<=0){

        }else{
            setcount(()=>count-1)
        }
    }
    return (
        <div>
            <h2>Counter : {count}</h2>
            <hr/>
            <br/>
            <button onClick={()=> incrementcounter()}>+</button>
            <button onClick={()=> decrementcounter()}>-</button>
        </div>
    );
}

export default Counter;