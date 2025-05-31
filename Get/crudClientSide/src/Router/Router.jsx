import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'

 export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
    },
    {
      path: '/about',
      Component: About,
      loader: ()=> fetch('http://localhost:3000/about')
    }
  ])

