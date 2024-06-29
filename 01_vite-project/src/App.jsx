// import our chai function here.
import Chai from "./chai"

function App() {
  /* we can return only 1 element of html.so h1 and chai can't be return together. */
  /* but we can return multiple element by wrapped them in a div class. we also use <>..</> for sortcut. */
  return (
    /*
        <h1>Vite+React</h1>
        <Chai/> // return our function wrriten in file chai.
    */
    <>
      <p>test para</p>
      <Chai></Chai>
      <h1>Vite+React</h1>
    </>
  )
}

export default App  // here we export App function to main. and import in main.
