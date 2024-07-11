import React from 'react'
import useTheme from '../context/ThemeContext'


// here we declear a themeBtn and it's property.
export default function ThemeBtn() {
    // we call the useTheme function that has context and can be use everywhere. and store them in adiffrent variables.themeMode, lightTheme, darkTheme
    const {themeMode, lightTheme, darkTheme} = useTheme()
    // here we derive a function that is called on change in button status. and it's resposible to change the color of the background.
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
            /* here we declear a cheakbox that has intial value"" onChange it it call the function and based upon that we can change the color of the theme.*/
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode=== "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}