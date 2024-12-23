import React from 'react'
import home_banner from '../Assets/home_banner.png'
const Hero = () => {
    return (
        <div>
            <div className='relative h-[50rem]'>
                <img src="https://staticg.sportskeeda.com/editor/2022/12/dc91a-16709602500201-1920.jpg" alt="" className='w-full h-full' />
                <div className='absolute inset-0 bg-gradient-to-r from-black ...'></div>
                <div className='absolute inset-0 ml-20 p-10 w-[35%] flex flex-col justify-center items-start'>
                    <p className='text-7xl text-white font-semibold font-inter capitalize font-protest'>Elevate your lifting journey right here</p>
                    <button className='text-white font-medium mt-10 p-2 px-5 border hover:shadow-xl hover:shadow-black hover:scale-105 transition-all rounded-full flex items-center gap-2 active:bg-red-700 tracking-wider'>Shop Now <span className='text-2xl'>&#8594;</span></button>
                </div>
            </div>
        </div>
    )
}

export default Hero
