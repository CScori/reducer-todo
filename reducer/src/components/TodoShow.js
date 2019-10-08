import React from 'react'

const TodoShow = (props, {dispatch}) => {
    console.log("state obj", props.state.tasks)

    return (
        <div>{props.state.tasks.map(todo => {
            return (
                <div key={todo.id}>
                    <h4>Task : {todo.item}</h4>
                    <div>{todo.completed ? !todo.completed : todo.completed}Complete
                    <button className='check' onClick={() => dispatch({ type: 'TOGGLE_COMPLETE'})}>To Done</button>
                    </div>
                </div>
            )
        })}

        </div>
    )
}

export default TodoShow
