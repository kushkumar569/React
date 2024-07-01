import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// create our own type of ReactElemnt and trying to render by react becouse, whatever we pass in first react convert into the tree and then render to that Element.
// so, we trying to form a tree and want to directly rended by react then it's error, becouse it's unable to read it's syntax.

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// but we can form a own kind of object and can be pass directly to the react.
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"

// we create a variable of type "React". which has 
// 1. type's i.e 'a', h1... ,p etc.
// 2. {} if we have 'a' than add link and if we have h1.. than leave it. also can be add a class,id.
// 3. add title that are shown.

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement  // here we add a elemnt and it's add at the last and it takes as a title.
)

// select id root and whatever we export from App it convert them to a react-dom(ReactDOM.createRoot) to them. and directly render to it. without storing in another variable.
ReactDOM.createRoot(document.getElementById('root')).render(    

    anotherElement
    // MyApp()  //ultimatly myApp() function also return a html tag, so we can also this.
    // <App />
)
