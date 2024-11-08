import React from 'react';
import Image from 'next/image';

const Categories = () => {
  return (
    <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
            <Image
                src="/sun-umbrella.png"
                alt="Category - Beach" 
                width={20}
                height={20}
            />

            <span className='text-xs'>Beach</span>
        </div>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
            <Image
                src="/villa-icon.png"
                alt="Category - Villas" 
                width={20}
                height={20}
            />

            <span className='text-xs'>Villas</span>
        </div>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
            <Image
                src="/cabin-icon.png"
                alt="Category - Cabins" 
                width={20}
                height={20}
            />

            <span className='text-xs'>Cabins</span>
        </div>
        <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
            <Image
                src="/tiny-house-icon.png"
                alt="Category - Tiny home" 
                width={20}
                height={20}
            />

            <span className='text-xs'>Tiny home</span>
        </div>
    </div>
  )
}

export default Categories;