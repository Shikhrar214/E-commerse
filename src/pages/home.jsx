import React from 'react'
import { AllProducts, Banner, BlogPge, HomeCardsWithDetails, HomeTopCards, RoundedItemCatogery, SupportBar } from '../index.js'

function home() {
  return (
    <div>
      <Banner/>
      <RoundedItemCatogery/>
      <HomeTopCards/>
      <HomeCardsWithDetails/>
      <SupportBar/>
      <BlogPge/>
      <AllProducts/>
      home
    </div>
  )
}

export default home
