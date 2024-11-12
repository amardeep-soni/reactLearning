import React from 'react'

export default function Home() {
    return (
        <div className='relative'>
            <img src="https://www.pngmagic.com/product_images/White-brick-wall-background-image.jpg" className='h-[600px] w-full' />

            <div className='text-lg absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center flex-col'>
                <p className='text-2xl text-center font-bold'>Order food from the widest range of <br /> Restaurant</p>
                <div className='flex mt-4 bg-white rounded-lg px-4 py-2'>
                    <input type="text" className='rounded-lg focus-visible:outline-none pr-4' placeholder='Restaurants or cuisine' />
                    <button className='bg-[#FFd000] p-4 rounded-lg'>Find Restaurants</button>
                </div>
            </div>
        </div>
    )
}
