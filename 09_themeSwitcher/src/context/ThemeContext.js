import { createContext,useContext } from "react";

// create a context that has default value is THemeContext,lighTHeme,datkTheme.
export const ThemeContext = createContext({
    ThemeContext: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

// ThemeProvider store the value provided fro the ThemeContext.
export const ThemeProvider = ThemeContext.Provider

// here we define our custom hook that useContext and return it.
export default function useTheme(){
    return useContext(ThemeContext)
}