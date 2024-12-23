// import React, { useContext, useState, useEffect } from 'react';
// import { ShopContext } from '../../Context/ShopContext';

// const ProductDisplay = (props) => {
//     const { product } = props;
//     const { addToCart } = useContext(ShopContext);
//     const [quantity, setQuantity] = useState(1);

//     const handleQuantityChange = (e) => {
//         setQuantity(Number(e.target.value));
//     };


//     const handleAddToCart = () => {
//         if (quantity > 0) {
//             addToCart(product._id, quantity);
//         } else {
//             console.log('Quantity must be greater than 0');
//         }
//     };

//     return (
//         <div>
//             <div className='pl-20 py-5 flex gap-10'>
//                 {/* <div className='w-14 flex flex-col gap-3'>
//                     <img src={product.image} alt="" className='border p-1' />
//                     <img src={product.image} alt="" className='border p-1' />
//                     <img src={product.image} alt="" className='border p-1' />
//                 </div> */}
//                 <div className='w-[500px] border p-5'>
//                     <img src={product.image} alt="" />
//                 </div>
//                 <div className='w-[60%] flex flex-col gap-10 items-start'>
//                     <div className='flex flex-col gap-5'>
//                         <p className='text-4xl font-bold'>{product.name}</p>
//                         <p className='text-2xl font-medium text-red-700 mt-3'>
//                             Rs.{product.new_price} 
//                             <span className='line-through text-gray-500 ml-2'>
//                                 Rs.{product.old_price}
//                             </span>
//                         </p>
//                     </div>
//                     <div className='mt-5 flex gap-2 items-center'>
//                         <p className='text-lg font-medium'>Qty</p>
//                         <input 
//                             type="number" 
//                             className='border-2 p-1 w-20 rounded-md' 
//                             value={quantity}
//                             onChange={handleQuantityChange} 
//                             min="1" 
//                         />
//                         <p className='text-lg font-medium text-gray-700 capitalize'>in stock</p>
//                     </div>
//                     <button 
//                         onClick={handleAddToCart} 
//                         className='transition-all p-3 w-1/3 text-lg text-white rounded-lg font-semibold bg-black hover:shadow-xl hover:scale-105 hover:shadow-gray-400 border-0'
//                     >
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDisplay;

import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    };

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart(product._id, quantity);
        } else {
            console.log('Quantity must be greater than 0');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Product Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-10 rounded-lg shadow-xl">

                    {/* Product Image Section */}
                    <div className="flex flex-col space-y-6">
                        <div className="w-full h-[550px] bg-gray-100 rounded-lg overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        {/* Thumbnail Gallery (optional) */}
                        {/* <div className="grid grid-cols-4 gap-3">
                            <img src={product.image} alt={product.name} className="border p-1 rounded-lg cursor-pointer hover:border-gray-500 transition duration-300" />
                            <img src={product.image} alt={product.name} className="border p-1 rounded-lg cursor-pointer hover:border-gray-500 transition duration-300" />
                            <img src={product.image} alt={product.name} className="border p-1 rounded-lg cursor-pointer hover:border-gray-500 transition duration-300" />
                            <img src={product.image} alt={product.name} className="border p-1 rounded-lg cursor-pointer hover:border-gray-500 transition duration-300" />
                        </div> */}
                    </div>

                    {/* Product Details Section */}
                    <div className="flex flex-col justify-between space-y-8">
                        {/* Product Title & Price */}
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
                            <p className="text-2xl text-red-600 font-semibold">
                                Rs. {product.new_price}
                                <span className="line-through text-gray-500 ml-4 text-lg">Rs. {product.old_price}</span>
                            </p>

                            {/* Rating Section */}
                            <div className="flex items-center space-x-2">
                                {/* Rating Stars */}
                                <div className="flex text-yellow-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                </div>
                                {/* Rating Value */}
                                <p className="text-lg font-medium text-gray-700">4.0/5</p>
                            </div>
                        </div>

                        {/* Product Description */}
                        <div className="text-gray-700 space-y-4">
                            <h2 className="text-xl font-semibold">Product Description</h2>
                            <p>{product.description}</p>
                        </div>

                        {/* Quantity Selector & Stock Info */}
                        <div className="flex items-center space-x-4">
                            <label className="text-lg font-medium text-gray-800">Quantity</label>
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="border-2 p-2 w-20 rounded-lg text-center focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
                                min="1"
                            />
                            <p className="text-lg text-gray-600">In Stock</p>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={handleAddToCart}
                            className="bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:shadow-lg transition duration-300"
                            >
                            Add to Cart
                        </button>

                        {/* Additional Product Info */}
                        {/* <div className="text-gray-600">
                            <h2 className="text-xl font-semibold">Product Features</h2>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li>Luxurious and durable material</li>
                                <li>Available in various sizes</li>
                                <li>Perfect for all types of workouts</li>
                                <li>Exclusive design only at Gymnasia</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
