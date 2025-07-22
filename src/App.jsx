import React from 'react'
import "./App.css"
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import Notfound from './Pages/NotFound/NotFound';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';





export default function App() {


  const router = createBrowserRouter ([
    {path: "" , element: <Layout/> , children : [
      {path:"" , element:<Home/>},
      {path:"home" , element:<Navigate to={"/"}/>},
      {path:"about" , element:<About/>},
      {path:"portfolio" , element:<Portfolio/>},
      {path:"contact" , element:<Contact/>},
      {path:"*" , element:<Notfound/>},
    ]}
  ])

  return (
    <>
        <RouterProvider router={router} ></RouterProvider>
    </>
  )
}
