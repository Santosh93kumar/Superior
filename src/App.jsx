import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./Applayout";
import Home from "./component/Home";
import About from "./component/about/About";
import Service from "./component/Service";
import Servicepage from './component/service/Servicedetail';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/service', element: <Service />  },
          { path: '/service/:name/:id', element: <Servicepage />  }
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

