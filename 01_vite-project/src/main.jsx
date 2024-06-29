import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// // select id root and ehatever we export from App it convert them to a react-dom(ReactDOM.createRoot) to them. and directly render to it. without storing in another variable.
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
