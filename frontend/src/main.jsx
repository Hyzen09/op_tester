import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Homepage from './Components/GameScreens/Homepage'
import NumberGame from './Components/GameScreens/NumberGame'

const router = createBrowserRouter([
  {
     path : '/',
     element :<Layout/>,
     children :[
      {
         path : '',
         element : <Homepage/>
      },
      {
        path : 'numbermemory',
        element : <NumberGame/>
      }
     ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
 </React.StrictMode>,
)
