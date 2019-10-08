import React, {useState} from 'react'

const TodoForm = (props, {dispatch}) => {
    const [todo, setTodo] = useState({});
    console.log("form state", props.state.tasks)
    const handleChanges = e => {
        setTodo(e.target.value)
    }
   
    const submitNew = e => {
        e.prevent.default();
    };
    return (
            <form onSubmit={submitNew}>
                <input
                    type="text"
                    value={setTodo}
                    name="task"
                    onChange={handleChanges}
                />
                <div>
                <button onClick={() => dispatch({ type: 'ADD_TODO', payload: todo})}>Add ToDo</button>
                </div>
            </form>
    )
}

export default TodoForm
