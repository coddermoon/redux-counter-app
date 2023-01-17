import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/Actions/todosAction';

const Fetch = () => {
    const dispatch = useDispatch()
    const {isLoading,todos,error} = useSelector(state=>state)

    useEffect(()=>{

        dispatch(getAllTodos())
        

    },[])
    return (
        <div className='center'>
            <h1>Data fatch trough Redux</h1>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}

            {
                todos.map(todo=> <h3>{todo.title}</h3>)
            }

        </div>
    );
};

export default Fetch;