import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './CustomHook/useCurrencyInfo'
import { InputBox } from './components'

// here App import the all into themself and export to the main.

function App() {
  /* Create a useState and set their default value.*/
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  // call the api and pass the currency type store in from and store the result given by api in the variable currencyInfo.
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo) // here we store all the key in the options by using the Object.keys

  // here we create a function that swap the value.
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // function use to convert the values of the currency.
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

// Every thing inside the InputBox can be used here becouse App import that.
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize:cover
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
          /* on click on submit/button call the convert function and preventDefault(use to prevent the default behavior of takaen by the submitting.). */
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"  /* here we use lalel to write From to the first of the input. */
                amount={amount}   /* take inout and store them in amount. */
                currencyOptions={options}     /*In currency opotion store all the keys that we are taken. */
                onCurrencyChange={(currency) => setAmount(amount)}  /*On currency pass the currency and output is ammount. */
                selectCurrency={from}   /*store the type of currency choose in the from.*/ 
                onAmountChange={(amount) => setAmount(amount)}  /*On changing in the Amount call the funciton .*/
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"    /*similar. */
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()  /*write a name of the button.*/}  
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
