import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollection from '../Components/NewCollections/NewCollection'
import Offers from '../Components/Offers/Offers'


const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
    </div>
  )
}

export default Home
