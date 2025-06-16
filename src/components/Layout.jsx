import React from 'react'
import { Outlet } from 'react-router'
import { Footer, Header} from "../index.js"

function Layout() {
  return (
    <div className='bg-black'>
        <Header/>

        <Outlet/>

        <Footer/>
    </div>
  )
}

export default Layout
