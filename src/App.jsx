import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=20;
  let [counter,setCounter]=useState(0)

 const addValue=()=>{
  console.log("clicked",Math.random(),counter);
  setCounter(counter+1);
 }
 const removeValue=()=>{
  setCounter(counter-1);
 }
  return (
    <>
      <h2>Alpha Tech Solution.</h2>
      <h3>Counter Value:{counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
