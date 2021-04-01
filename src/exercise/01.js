// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, {useReducer} from 'react'

const countReducer = (state, action) => ({
  ...state,
  ...(typeof action === 'function' ? action(state) :  action)
})

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = useReducer(countReducer, {count: initialCount})
  const {count} = state
  const increment = () => {
    return setState(currentState => {
      return {count: currentState.count + step}
    })
  }
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
