import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"
import { About, Home, Layout } from "./index.js";


function App() {
  
  const router = createBrowserRouter([
    { 
      path: "", 
      element: <Layout/>,
      children: [
        {path: "", element: <Home/>},
        {path: "about", element: <About/>} 
      ]
    },      
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
