import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './customCard/card'  // import card

function App() {
  const [count, setCount] = useState(0)
let myobj = {
  username : "kush",
  age:20
}
let newArr = [1,2,3]  // we can pass both array and object also.

  // here className is similar to the class of css.
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Kush" btnText="click me"/>
      <Card username="Lav"/>
    </>
  )
}

export default App
