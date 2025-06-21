import React from 'react'
import { AllProducts, Banner, BlogPge, HomeCardsWithDetails, HomeTopCards, RoundedItemCatogery, SupportBar, Testimonials } from '../index.js'
// import AutoSlider from '../category/autoslider.jsx'

function home() {
  return (
    <div>
      <Banner/>
      <RoundedItemCatogery/>
      <HomeTopCards/>
      <HomeCardsWithDetails/>
     <div className='lg:mx-50'>
     <SupportBar/>
     </div>
      <BlogPge/>
      <AllProducts/>
      <Testimonials/>
      <AutoSlider/>
    </div>
  )
}

export default home
