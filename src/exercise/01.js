// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, { useState, useReducer } from 'react'

function Counter({initialCount = 0, step = 1}) {

  function countReducer(prevState, newState) {
    return newState
  }

  const [count, setCount] = useReducer(countReducer, initialCount)

  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
