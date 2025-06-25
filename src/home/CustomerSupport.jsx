import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";

function CustomerSupport() {
  return (
<div className="flex flex-col md:flex-row justify-between items-center m-4 p-4 text-sm sm:text-base md:text-lg bg-white shadow-lg rounded-xl divide-y md:divide-y-0 md:divide-x divide-gray-300">
  <div className="flex items-center gap-2 py-2 md:py-0 md:px-6">
    <CiDeliveryTruck className="text-xl" />
    <span>ALL India Shipping</span>
  </div>
  <div className="flex items-center gap-2 py-2 md:py-0 md:px-6">
    <BiSupport className="text-xl" />
    <span>24x7 Customer Support</span>
  </div>
  <div className="flex items-center gap-2 py-2 md:py-0 md:px-6">
    <RiSecurePaymentLine className="text-xl" />
    <span>Secure Payment</span>
  </div>
</div>

)
}
export default CustomerSupport;
