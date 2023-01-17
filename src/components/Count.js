import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, IncrementCounter, resetCounter } from '../services/Actions/CounterAction';


const Count = () => {
const count = useSelector(state=> state.count)
const dispatch = useDispatch()



    const btnStyle = {
        margin:'10px',
        padding:'10px 13px',
        backgroundColor:'lightgreen',
        outline:'none',
        border:'none',
        cursor:'pointer',
        borderRadius:'6px',
        boxShadow:'2px 4px 4px #ccc',
    }

const handleIncrement = () => {

dispatch(IncrementCounter())



}

// decrement

const handleDecrement = () =>{
    dispatch(decrementCounter())
}


const handleReset = () =>{
    dispatch(resetCounter())
}

    return (
        <div>
            <h2>Counter app</h2>
            <h3>count : {count}</h3>
            <div className="button">
                <button style={btnStyle} onClick={handleIncrement}>Increment</button>
                <button style={btnStyle} onClick={handleDecrement}>decrecrement</button>
                <button style={btnStyle} onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Count;