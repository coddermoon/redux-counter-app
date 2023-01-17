import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IncrementCounter } from '../services/Actions/CounterAction';


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

    return (
        <div>
            <h2>Counter app</h2>
            <h3>count : {count}</h3>
            <div className="button">
                <button style={btnStyle} onClick={handleIncrement}>Increment</button>
                <button style={btnStyle}>decrecrement</button>
            </div>
        </div>
    );
};

export default Count;