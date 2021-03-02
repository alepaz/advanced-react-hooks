// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, { useReducer } from 'react'

function Counter({initialCount = 0, step = 1}) {

  function countReducer(prevState, step) {
    return prevState + step
  }

  const [count, changeCount] = useReducer(countReducer, initialCount)

  const increment = () => changeCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
