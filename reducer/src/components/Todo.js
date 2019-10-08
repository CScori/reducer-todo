import React, { useState, useReducer } from 'react'
import TodoForm from './TodoForm'
import { initialState, reducer } from '../Reducer/TodoReducer'


const todo = () => {
    

    const [state, dispatch] = useReducer(reducer, initialState);
   

    
    return (
        <div>
            <div>

            </div>
            <div className='new todo'>
                    <TodoForm dispatch={dispatch}/>
            </div>
        </div>
    )
}

export default todo
