import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* useCallback is a hook that returns a memoized version of the callback function that only 
  changes if one of the dependencies has changed. It's mainly used to optimize performance. 
  syntax:-  const variable  = useCallback(function,[depedencie-1,depedencie-2,depedencie-3....])
*/


/* 
   Memoization: useCallback helps in preventing unnecessary re-creations of the function when the component re-renders.
   Dependencies: Always list the dependencies correctly; otherwise, the function won’t get updated correctly.
   Performance: Particularly useful when passing callback functions to optimized child components that rely on reference equality to prevent unnecessary renders (e.g., React.memo).
 */
function App() {
  const [length, setLength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharacterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  /*  here we pass a function in useCallback that basically generates a random password. on any of the depedencies affected.
      like change in length,marked change in NumberAllowed or CharecterAllowed but "PLEASE:- noted that there are not any depedency 
      on setPasswoed we use here just for the memory optimization, becouse password generated is stored in our chache memory not in the main memory." \
  */

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (NumberAllowed) str += "0123456789";
    if (CharacterAllowed) str += "`~!@#$%^&*()_-{}[]?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, length, NumberAllowed, CharacterAllowed, setPassword)

  useEffect(PasswordGenerator,length,NumberAllowed,CharacterAllowed);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={password}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App
