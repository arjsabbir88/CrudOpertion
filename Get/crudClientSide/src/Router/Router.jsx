import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home/Home'

 export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
    }
  ])

