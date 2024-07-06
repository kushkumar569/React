import React, {useId} from 'react'


// here we declear all the variable that we use to make our html file.
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) 

{
   const amountInputId = useId()        // generate a random Id. and we use this as a id of any tag.

    return (
        /* The "htmlFor" attribute in an HTML <label> tag is used to specify the relationship between the label and a form control (like an input field).
         The value of htmlFor should match the id attribute of the form control that the label is associated with. */

         /* label is used for the write above text to the form hence we must have to interconnect those. */

        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}` /* here className add becouse if user want to add their own tags. than they can be add.*/}>  
            <div className="w-1/2">
                <label htmlFor={amountInputId /* use to relate input field to the label. */}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId /* it's a random value and both are connect each other label and this.*/}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable  /*Initally we disable the input.*/}
                    value={amount  /* value is ammount input.*/}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))  /* on ammount change use and opearator for if value is empty tha not call. if not than call and pass value of input. */}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency /* type of Currency is whatever we pass to the selectCurrency */}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value) /*on change currency call the function and set value is simalar.*/}
                    disabled={currencyDisable  /*intially the value change is disableed.*/}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency /*by using map we store all the keys.*/}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;