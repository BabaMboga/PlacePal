import React from 'react';
import Image from 'next/image';

const PropertyListItem = () => {
  return (
    <div className='cursor-pointer'>
        <div className="overflow-hidden aspect-square rounded-xl">
            <Image
                fill
                src="/placepal-images/"
            />
        </div>
    </div>
  )
}

export default PropertyListItem;