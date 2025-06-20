import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"
import { About, AllProductPage, CartPage, Home, Layout, Login, Contactpage,SignOut, Productpage , Signup } from "./index.js";
import FavoritesPage from "./pages/Favpage.jsx";


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
        {path: "Cart", element:<CartPage/>},
        {path: "favorites", element: <FavoritesPage/>}, 
        {path: "contact", element: <Contactpage/>},
        {path: "productdetails", element: <Productpage />},
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
