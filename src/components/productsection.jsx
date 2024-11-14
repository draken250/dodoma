import React from 'react'

function ProductSection() {
  return (

    <div class="max-w-6xl mx-auto">
 
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-2xl font-semibold">Trending</h2>
      <div class="flex gap-3">
        <button class="px-4 py-2 rounded-full text-sm font-medium bg-black text-white"> all </button>
        <button class="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-800">mattress</button>
        <button class="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-800">bedcovers</button>
        <button class="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-800">pillows</button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div class="relative p-4 rounded-lg ">
        <img src="https://springtek.in/images/product/154/CoirBond_1359_01.jpg?v=1" alt="Casual Shoe" class="w-full h-48 object-cover rounded-lg mb-4"/>
        <div class="absolute top-4 right-4">
          <button>
            <svg class="h-6 w-6 text-red-500  " fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
          </button>
        </div>
        <h3 class="text-lg font-semibold">Casual Shoe</h3>
        <p class="text-gray-600">$225</p>
      </div>

      <div class="relative p-4  rounded-lg ">
        <img src="https://www.nilkamalsleep.com/cdn/shop/files/NILKAMALSLEEPPRODUCT20MAR20246071copy2_650x.jpg?v=1714384917" alt="Skateboard Shoe" class="w-full h-48 object-cover rounded-lg mb-4"/>
        <div class="absolute top-4 right-4">
          <button>
            <svg class="h-6 w-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
          </button>
        </div>
        <h3 class="text-lg font-semibold">Skateboard Shoe</h3>
        <p class="text-gray-600">$125</p>
      </div>

      <div class="relative p-4  rounded-lg ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpNbdRe4-FcjfKBilOxbfdJKwutVPQ_7Psw&s" alt="Skateboard Shoe" class="w-full h-48 object-cover rounded-lg mb-4"/>
        <div class="absolute top-4 right-4">
          <button>
            <svg class="h-6 w-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
          </button>
        </div>
        <h3 class="text-lg font-semibold">Skateboard Shoe</h3>
        <p class="text-gray-600">$125</p>
      </div>
 
      
    </div>
  </div>
  )
}

export default ProductSection