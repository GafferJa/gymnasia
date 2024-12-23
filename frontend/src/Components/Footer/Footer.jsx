import React from 'react'
import logo from '../Assets/logo.png'
import insta_icon from '../Assets/instagram_icon.png'
import pin_icon from '../Assets/pintester_icon.png'
import whats_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        // <div className='pt-10 my-5 flex flex-col items-center gap-5 border-t-2'>
        //     <div className='h-20 flex items-center gap-5'>
        //         <img src="https://logosmarcas.net/wp-content/uploads/2020/12/Batman-Logo.png" alt="" className='h-full' />
        //         <p className='text-4xl font-bold font-[Poppins]'>GYMNASIA</p>
        //     </div>
        //     <ul className='flex justify-evenly w-1/3 hover:cursor-pointer tracking-wider'>
        //         <li>Company</li>
        //         <li>Products</li>
        //         <li>About</li>
        //         <li>Contact</li>
        //     </ul>
        //     <div className='flex gap-8 mt-3'>
        //         <div className='hover:cursor-pointer hover:scale-105 transition-all'>
        //             <img src={insta_icon} alt="" />
        //         </div>
        //         <div className='hover:cursor-pointer hover:scale-105 transition-all'>
        //             <img src={pin_icon} alt="" />
        //         </div>
        //         <div className='hover:cursor-pointer hover:scale-105 transition-all'>
        //             <img src={whats_icon} alt="" />
        //         </div>
        //     </div>
        //     <div className='mt-5 w-full flex flex-col gap-5 items-center'>
        //         <hr className='w-[70%] h-[2px] bg-gray-500 rounded-full border-0' />
        //         <p>Copyright &copy; 2024 - All Rights Reserved</p>
        //     </div>
        // </div>
        <div className='bg-gray-200 pt-12'>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className='inline-flex items-center gap-3'>
                            <img src="https://logosmarcas.net/wp-content/uploads/2020/12/Batman-Logo.png" alt="" className='h-[3rem]' />
                            <h2 class="text-xl font-bold mb-4 tracking-wide">GYMNASIA</h2>
                        </div>
                        <p class="text-gray-600">
                            The best place to find luxurious gym accessories. Elevate your fitness game with Gymnasia essentials.
                        </p>
                        <div class="mt-4">
                            <a href="#" class="text-gray-600 hover:text-red-600">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="ml-4 text-gray-600 hover:text-red-600">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="ml-4 text-gray-600 hover:text-red-600">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-xl font-bold mb-4">Quick Links</h2>
                        <ul>
                            <li><a href="#" class="text-gray-600 hover:text-red-600 block mb-2">Home</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-red-600 block mb-2">Shop</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-red-600 block mb-2">About Us</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-red-600 block mb-2">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 class="text-xl font-bold mb-4">Contact Us</h2>
                        <ul>
                            <li class="text-gray-600 mb-2">Email: info@gymnasia.com</li>
                            <li class="text-gray-600 mb-2">Phone: +977 984-3340949</li>
                            <li class="text-gray-600">Address: 123 Fitness Ave, Workout City</li>
                        </ul>
                    </div>
                </div>
                <div class="mt-8 border-t border-gray-700 p-6 text-center text-sm">
                    <p class="text-gray-600">&copy; 2024 Gymnasia. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
