import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import Main from './component/Layout/Main.jsx';
import AboutUS from './component/About Us/AboutUS.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
     {
      path: "/",
      element: <Home></Home>,
     }
     , {
        path:"/login",
        element: <Login></Login>,
      },
      {
        path:"register",
        element: <Register></Register>,
      },
      {
        path:"about-us",
        element:<AboutUS></AboutUS>,
      },
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
