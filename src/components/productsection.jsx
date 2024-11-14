import React from 'react';
import { HeartIcon } from '@heroicons/react/outline'; // Install heroicons for icons

const TrendingShoes = () => {
  const products = [
    { id: 1, name: 'Casual Shoe', price: '$225', image: 'https://springtek.in/images/product/154/CoirBond_1359_01.jpg?v=1', liked: true },
    { id: 2, name: 'Skateboard Shoe', price: '$125', image: 'https://via.placeholder.com/150', liked: false },
    { id: 3, name: 'Skateboard Shoe', price: '$125', image: 'https://via.placeholder.com/150', liked: false },
    { id: 4, name: 'Casual Shoe', price: '$225', image: 'https://via.placeholder.com/150', liked: false },
    { id: 5, name: 'Skateboard Shoe', price: '$125', image: 'https://via.placeholder.com/150', liked: false },
    { id: 6, name: 'Skateboard Shoe', price: '$125', image: 'https://via.placeholder.com/150', liked: false },
  ];

  return (
    <div className="p-8">
      {/* Filter Bar */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">Trending</h2>
        <div className="flex gap-3">
          {['Shorts', 'Hat', 'Jackets', 'Shoes', 'T-Shirt'].map((item, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                item === 'Shoes' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="relative p-4 bg-white rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="absolute top-4 right-4">
              <button>
                <HeartIcon
                  className={`h-6 w-6 ${product.liked ? 'text-red-500' : 'text-gray-300'}`}
                />
              </button>
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingShoes;
