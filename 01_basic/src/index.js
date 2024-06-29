import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// select id root and ehatever we export from App it convert them to a react-dom(ReactDOM.createRoot) to them.
// here thar element is store in root but in vite it's directly render.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
