import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Reproductor from './rutas/Reproductor.jsx'
// pasarlo a un archivo aparte
const router = createBrowserRouter([
  {
      path: '/',
      element: (<App/>)
  },
  {
    path:'/reproductor',
    element:(<Reproductor></Reproductor>)
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 
     <RouterProvider router={router}></RouterProvider>
     
  </>,
)
