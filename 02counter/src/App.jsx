import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  
  const [counter, setCounter]= useState(15)
  const add=()=>{
    setCounter(counter+1)
  }
  const subtract=()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <br />
      <button onClick={add}>
        Add value
      </button >
      <br />
      <button onClick={subtract}>dec value</button>

      
    </>
  )
}

export default App
