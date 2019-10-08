import React, {useState, useReducer} from 'react'

import {initialState, reducer} from '../Reducer/TodoReducer'

const todo = () => {
    const [{  }, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState('');
    return (
        <div>
            
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
        </div>
    )
}

export default todo
