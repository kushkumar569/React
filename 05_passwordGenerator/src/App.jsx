import { useState, useCallback, useEffect, useRef } from 'react'
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
  }, [length, NumberAllowed, CharacterAllowed, setPassword])

  // useRef hook to take refenrence from the web page and manuplate them.It can be used to directly access and manipulate DOM elements.
  const passwordRef = useRef(null);

  // use useCallback to optimize it.nothing more.
  const copyPasswordToClipboard = useCallback(() => {
    // passwordRef.current?.Select;  // select all the value of the clipboard.
    passwordRef.current?.setSelectionRange(0, 10);    // select the value of clipboard from 0 to 100 charecter.
    window.navigator.clipboard.writeText(password);   // use copy clipboard text.
  }, [password])

  // useEffect is use if we want to something/ some function call on happening some event.
  // here call the PasswordGenerator on th echange in the any value of the length,NumberAllowed,CharacterAllowed,PasswordGenerator.
  useEffect(() => {
    PasswordGenerator()
  }, [length, NumberAllowed, CharacterAllowed, PasswordGenerator]);

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
          ref={passwordRef}   // here we interconnect to the useRef now, we can manuplate the value of the reference that we pass by using the useRef.
        />
        <button
          onClick={copyPasswordToClipboard}   // on clicking this call the function to copy the clipboard.
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}  // here we create a range type input that has range from 6 to 100 and naming is done by lebel as a length.
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}   // here on change we want to call a function, pass a parameter of that range so pass the e.target.value gives the range that we set.
          />  
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={NumberAllowed} // here we create a checkbox of name Numbers.
            id="numberInput"
            onChange={() => { 
              setNumberAllowed((prev) => !prev); // here we know that set methord store the prev value so use that to reverse the value.
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={CharacterAllowed}  // here we create a checkbox of name Character.
            id="characterInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
