import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";

function CustomerSupport() {
  return (
    <div className='flex items-end justify-around m-2 p-2 text-3xl'>
      <div className='flex flex-row gap-4 itmes-center'><CiDeliveryTruck />ALL India Shipping</div>
     <div className='flex flex-row gap-4'><BiSupport />24x7 Customer Support</div>
      <div className='flex flex-row gap-4'><RiSecurePaymentLine />Secure payment</div>
    </div>
  )
}

export default CustomerSupport;
