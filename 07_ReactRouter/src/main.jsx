import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// here we import the createRoute and RouteProvider both.
import { createBrowserRouter, RouterProvider ,createRoutesFromElements,Route} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contect.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'

// we create a BrwserRouter that how link is open's.
// 1. path "/" means / shows and Layout is open in browser.
// 2. path "/" is shows and Home path is open means by default home page is open.
// 3. /about is shows than about Layout is open.

// we can do multiple route and can be use nested route also.
// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element : <Layout/>,
//       children :[
//         {
//           path: "",
//           element:<Home />
//         },
//         {
//           path: "about",
//           element:<About />
//         },
//         {
//           path:"contact",
//           element:<Contact/>
//         }
//       ]
//     }
//   ]
// )

//2nd methord to declear a route.
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /* here we use dynamic route after : userid use as a function to define route. *//> 
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github /> /* here we use github api call to show the github profile and follower */}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
