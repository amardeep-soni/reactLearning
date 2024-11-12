import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <div className='bg-white flex justify-between px-4 py-2 shadow-lg'>
      <img src="https://img.freepik.com/premium-vector/logo-food-company-that-says-sun-sun-sunflower_917213-253424.jpg?w=740" alt="logo" className='h-16 w-16 rounded-full' />

      <div className='flex items-center gap-4 relative mr-3'>
        <FaShoppingCart className="h-10 w-10 mr-1" />
        <p className='absolute top-[2px] right-[-17px] bg-[#FFd000] rounded-full py-1 px-2 font-bold'>10</p>
      </div>
    </div>
  )
}
