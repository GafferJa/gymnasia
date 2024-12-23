import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Home from "./Pages/Home"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Login from './Pages/Login'
import PaymentSuccess from './Pages/PaymentSuccess'

const RouterComponent = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/belts' element={<ShopCategory category="belts" />} />
          <Route path='/sleeves' element={<ShopCategory category="sleeves" />} />
          <Route path='/straps' element={<ShopCategory category="straps" />} />
          <Route path='/singlets' element={<ShopCategory category="singlets" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/success" element={<PaymentSuccess />} />
        </Routes>
    </div>
  )
}

export default RouterComponent
