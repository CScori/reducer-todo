import React, { useState, useReducer } from 'react'

import { initialState, reducer } from '../Reducer/TodoReducer'

const todo = () => {
    const [{ name, completed, id }, dispatch] = useReducer(reducer, initialState);

    return (
        <div key={id}>
            <h2>{name}</h2>
            <div>
                {!completed ? (
                    <button>To Done</button>
                ): (
                    <div>
                        <input>
                        </input>
                    </div>
                )};

            </div>

        </div>
    )
}

export default todo
