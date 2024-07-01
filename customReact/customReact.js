/* here this function takes value's and store. */
// work like render of the react.
function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    // by using while loop we add all the propery to the domElement and finally append it to the element of container(root).
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


/* React at the compile time check which type of html code has been passed and check it's strictly by using such kind of key value.
    like here it, check type of element and it's property and it's childeren. */
// always internally react form a tree graph of that type,
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// store the id of root.
const mainContainer = document.querySelector('#root')

// call main customRender funtion which take all kind of element from reactElement and store them in a mainContainer.
customRender(reactElement, mainContainer)