import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default: 
            return state  
    }
}

function ReducerHookTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <button onClick={() => dispatch({type:'increment'})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default ReducerHookTwo
