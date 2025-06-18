import React from 'react'
import { AllProducts, Banner, BlogPge, HomeCardsWithDetails, HomeTopCards, RoundedItemCatogery, SupportBar, Testimonials } from '../index.js'

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
    </div>
  )
}

export default home
