import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout.jsx'
import { Home } from '../Components/Home/Home.jsx'
import {About} from '../Components/About/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
      path: "Home",
      element: <Home/>
    }, 
    {
      path: "About",
      element: <About/>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

/*
  In order to render app using react router do we need to put it inside 
  a RouterProvider which takes up a prop (router) shown as above
  The prop router calls a method createBrowserRouter method which takes an 
  array containing different objects like path
*/