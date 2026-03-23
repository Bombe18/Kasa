import React from "react"
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './router.jsx'
import "./index.scss"

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
)
