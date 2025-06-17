import React from 'react'
import { Outlet } from 'react-router'
import { Footer, Header} from "../index.js"

function Layout() {
  return (
    <div>
        <Header/>

        <Outlet/>

        <Footer/>
    </div>
  )
}

export default Layout
