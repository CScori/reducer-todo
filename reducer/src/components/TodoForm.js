import React, {useState} from 'react'

const TodoForm = ({dispatch}) => {
    const [todo, setTodo] = useState({});
    const handleChanges = e => {
        setTodo(e.target.value)
    }
   
    return (
            <form onSubmit={() => {
                dispatch({ type: 'ADD_TODO', payload: todo})
               }}>
                <input
                    type="text"
                    value={todo}
                    name="task"
                    onChange={handleChanges}
                />
                <button type='submit'>Add ToDo</button>
            </form>
    )
}

export default TodoForm
