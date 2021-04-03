// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, {useReducer} from 'react'

const countReducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return {...state, count: state.count + action.step}
  } else if (action.type === 'DECREMENT') {
    return {...state, count: state.count - action.step}
  }
  return state
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatcher] = useReducer(countReducer, {count: initialCount})
  const {count} = state
  const increment = () => {
    return dispatcher({type: 'INCREMENT', step})
  }
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
