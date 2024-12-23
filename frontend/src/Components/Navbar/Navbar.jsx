import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo_white.png'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className='flex items-center p-5 bg-black justify-between font-inter font-normal text-lg sticky top-0 z-10 shadow-lg shadow-black h-[4rem]'>
      <Link to='/'><div className='ml-10 h-10 flex items-center gap-3'>
        <img src="https://clipart-library.com/images/yTkro589c.jpg" alt="" className='h-full' />
        <p className='text-white font-semibold text-2xl font-[Poppins] tracking-wider'>GYMNASIA</p>
      </div></Link>
      <ul className='flex gap-6 text-white hover:cursor-pointer tracking-wider'>
        <Link to='/'><li onClick={() => { setMenu("home") }}> HOME {menu === "home" ? <hr /> : <></>}</li></Link>
        <Link to='/belts'><li onClick={() => { setMenu("boards") }}>BELTS {menu === "belts" ? <hr /> : <></>}</li></Link>
        <Link to='/sleeves'><li onClick={() => { setMenu("decks") }}>SLEEVES {menu === "sleeves" ? <hr /> : <></>}</li></Link>
        <Link to='/straps'><li onClick={() => { setMenu("wheels") }}>STRAPS {menu === "straps" ? <hr /> : <></>}</li></Link>
        <Link to='/singlets'><li onClick={() => { setMenu("trucks") }}>SINGLETS {menu === "singlets" ? <hr /> : <></>}</li></Link>
      </ul>
      <div className='flex gap-5 items-center mr-10 h-10'>
        <Link to='/loginsignup' onClick={() => { setMenu("") }}><i className="p-2 w-15 fa-solid fa-user text-white text-4xl"></i></Link>
        <Link to='/cart' onClick={() => { setMenu("") }}>
          <i className="fa-solid fa-cart-shopping text-white text-3xl relative"></i>
          <p className='absolute top-4 right-12 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-white'>{getTotalCartItems()}</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
