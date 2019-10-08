import React, {useReducer } from 'react'
import TodoShow from './TodoShow'

import TodoForm from './TodoForm'
import { initialState, reducer } from '../Reducer/TodoReducer'


const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <TodoShow sdispatch={dispatch} state={state} />
      </div>
      <div className='new todo'>
        <TodoForm dispatch={dispatch} state={state} />
      </div>
    </div>
  )
}

export default Todo
