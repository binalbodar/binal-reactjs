import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../../Redux/Action/Counter.Action';

function About(props) {
    const dispach = useDispatch();
    const c = useSelector(state=>state.counter)

    const handleIncrement =()=>{
        dispach(incrementCounter())
    }
    const handleDecrement=()=>{
        dispach(decrementCounter())
    }
    return (
        <div className='container'>
            <button onClick={()=>handleIncrement()}>+</button>
            <p>{c.counter}</p>
            <button onClick={()=>handleDecrement()}>-</button>
        </div>
    );
}


export default About;