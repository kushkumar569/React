import { useState,useEffect } from "react";

// here we create a customHook that call the currency and return the value of that "Currency to the other amount of currency."
// unfortunatly our API do not work hence our, project also failed to perform.

function useCurrencyInfo(currency){         // in that function we pass the currency to call the api to choose the currency.
    const [data,setData] = useState({}) // default a empty list 
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)  // fetch api
        .then((res)=> res.json)                    // pass that result in res and convert that result to the json format.bcs by default it's in string format.
        .then((res) => setData(res[currency]))      // here whatever we pass the currency(by use, that data store in the data by calling the function setData.)
    },[currency])     // here when we change in curreny(passed in function) than again call the api and update in the data.
    return data;        // return that data.
}

export default useCurrencyInfo;      // export this file and import in the app.jsx and app.jsx finally return to the main.