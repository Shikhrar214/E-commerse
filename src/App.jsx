import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"
import { About, AllProductPage, Home, Layout, Login, SignOut, Signup } from "./index.js";
import Category from "./pages/category.jsx";


function App() {
  
  const router = createBrowserRouter([
    { 
      path: "", 
      element: <Layout/>,
      children: [
        {path: "", element: <Home/>},
        {path: "about", element: <About/>},
        {path: "all-products", element: <AllProductPage/>}, 
        {path: "login", element: <Login/>},
        {path: "signup", element: <Signup/>},
        {path: "signout", element: <SignOut/>}, 
        {path: "category", element: <Category/>}, 
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
