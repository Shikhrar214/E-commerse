import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"
import { About, AllProductPage, CartPage, Home, Layout, Login, Contactpage,SignOut, Productpage , Signup, Bags,Assessories, Basket, HomeDecor, KitchenAndDining, BestSellers } from "./index.js";
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
        {path: "bags", element: <Bags/>},
        {path: "basket", element: <Basket/>},
        {path: "home-decore", element: <HomeDecor/>},
        {path: "kitchen", element: <KitchenAndDining/>},
        {path: "best-seller", element: <BestSellers/>},
        {path: "accessories", element: <Assessories/>}
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
