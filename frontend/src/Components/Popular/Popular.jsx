import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div>
      <h1 id='pop' className='text-4xl font-bold text-center mt-16 flex flex-col items-center text-gray-700'>POPULAR RIGHT NOW <hr className='w-60 mt-2 h-1 bg-gray-700 border-0 rounded-lg' /></h1>

      <div className='flex justify-evenly my-16'>
        {data_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
