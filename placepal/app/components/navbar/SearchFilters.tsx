import React from 'react'
// import Image from 'next/image'

const SearchFilters = () => {
  return (
    <div className="h-[64px] flex flex-row items-center justify-between border rounded-full">
        <div>
            <div className="flex flex-row items-center justify-between">
                <div className="w-[250px] h-[64px] px-8 flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Where</p>
                    <p className="text-sm ">Wanted Location</p>
                </div>
                <div className="h-[64px] px-8 flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Check In</p>
                    <p className="text-sm ">Add dates</p>
                </div>
                <div className="h-[64px] px-8 flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Check Out</p>
                    <p className="text-sm ">Add dates</p>
                </div>
                <div className="h-[64px] px-8 flex-col justify-center rounded-full hover:bg-gray-100">
                    <p className="text-xs font-semibold">Who</p>
                    <p className="text-sm ">Add guests</p>
                </div>
            </div>
        </div>

        <div className="p-2">
            <div className='cursor-pointer p-2 lg:p-4 bg-airbnb hover:bg-airbnb-dark transition rounded-full text-white'>
            <svg 
                        viewBox="0 0 32 32" 
                        style={{display:'block', fill:'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth:4, overflow:'visible'}} 
                        aria-hidden="true" role="presentation" focusable="false"
            >
                        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
            </svg>
            {/* <Image
                src="/icons8-search-finito.svg"
                alt="just another search icon"
                width={16}
                height={16} 
            /> */}
            </div>
        </div>
    </div>
  )
}

export default SearchFilters