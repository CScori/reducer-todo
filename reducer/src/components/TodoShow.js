import React from 'react'

const TodoShow = (props) => {
    return (
        <div key={props.id}>
           <h2>{props.name}</h2> 
           <button>To Done</button>
        </div>
    )
}

export default TodoShow
