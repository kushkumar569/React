/* Any change in variable only reflect in console.log not in website.ui/ux so we use this to reflect in our original website. */

import { useState } from 'react' // import useState.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// syntax of useState . it store to values. variable and a function.
  const [counter, setCounter]  = useState(15)     // gives default valur of counter is  15.

  // let counter = 15


  // after click on set counter call the addvalue method that has setCounter that update all the value of counter in all website ui/ux.
  const addValue = () => {
    // counter = counter + 1
    setCounter(counter+1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App