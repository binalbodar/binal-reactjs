import React, { useEffect, useState } from 'react';

function TimeFun(props) {
    const [time, setTime]=useState(new Date());

    const tick=()=>{
        setTime(new Date())
    }
    useEffect(
        ()=>{
            //componentDidMount, componentDidUpdate
            const timeId =setInterval(()=>tick(),1000);

            return()=>{
                //componetWillUnmount
                clearInterval(timeId);
            }
        },
    [time]);
    return (
        <div>
            { time.toLocaleTimeString() }
        </div>
    );
}

export default TimeFun;