import React from 'react'
import offer_banner from '../Assets/offers_banner.png'
const Offers = () => {
  return (
    <div>
      <div>
            <div className='relative h-[30rem]'>
                <img src="https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F43afnXy5BKoGWPFCc78mUE%2Fc82e722eb97907da6e6fbe789ea755f4%2FA_Collection_Banner_3840x1096.jpg&w=1920&q=85" alt="" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-gradient-to-r from-black ...'></div>
                <div className='absolute inset-0 ml-20 p-10 w-[40%] flex flex-col justify-center items-start'>
                    <p className='text-7xl text-white font-semibold font-inter'>Exclusive Offers For You</p>
                    <p className='text-white uppercase font-medium mt-3'>only best sellers products</p>
                    <button className='text-white font-medium mt-10 p-2 px-5 border hover:shadow-xl hover:shadow-black hover:scale-105 transition-all rounded-full tracking-wider active:bg-red-700'>Check Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers
