import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App(){
  let[counter,setCounter]=useState(15)
// let counter=15
const addValue= () => {
  // console.log("value added",Math.random());
console.log("clicked",counter);'clicked'|15
counter=counter+1
setCounter(counter)
}
  return (
  <>
    <h1>CounterProject</h1>
    <h2>Countervalue:15</h2>
    <button
    onClick={addValue}
    >Add value</button>
    <br />
    <button>Delete value</button>
    </>
  )
}

export default App
