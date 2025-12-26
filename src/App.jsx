import React from 'react'
import './index.css'
import {createBrowserRouter} from "react-router-dom"
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import Paste from './Components/Paste.jsx'
import ViewPaste from './Components/ViewPaste.jsx'
import {RouterProvider} from "react-router-dom"


const router= createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navbar />
        <Paste />
      </div>
    },
    {
      path:"pastes/:id",
      element:
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    },


  ]
)
export default function App() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <RouterProvider router={router} />
    </div>
  )
}
