import React from 'react'
import { 
  AllProducts,
   Banner, WeeklySpecials,BlogPge, HomeCardsWithDetails, HomeTopCards, RoundedItemCatogery, SupportBar, Testimonials,MeetTheMaestros, NewArrivals } from '../index.js'
// import { AllProducts, Banner, BlogPge, HomeCardsWithDetails, HomeTopCards, RoundedItemCatogery, SupportBar, Testimonials } from '../index.js'


function home() {
  return (
    <div>
      <Banner/>
      <MeetTheMaestros />
      <WeeklySpecials />
      <NewArrivals />
      <RoundedItemCatogery/>
      <HomeTopCards/>
      <HomeCardsWithDetails/>
     <div className='lg:mx-50'>
     <SupportBar/>
     </div>
      <BlogPge/>
      {/* <AllProducts/> */}
      <Testimonials/>
    
    </div>
  )
}

export default home
