import './App.css'
import UserContextProvider from './contex/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

/*
    In React, the useContext hook allows you to access the context within functional 
    components. Context provides a way to share values like these between components without having to 
    explicitly pass a prop through every level of the tree.
*/
function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
