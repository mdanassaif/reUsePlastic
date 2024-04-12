import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        

    <div className='p-4 relative z-10 w-full text-center'>
    <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-white'>Data Simplifies, Plastic<br/> Reused for Earth</h1>
        <p className='mt-4 font-normal text-base md:text-lg  text-gray-100 max-w-lg mx-auto'>Join us in turning plastic trash into valuable resources for a greener tomorrow.</p>
    </div>

    <div className="mt-4 flex space-x-10">
  <Link href={'#'}>
    <Button
      borderRadius="1.75rem"
      className="border-transparent px-6 py-2 bg-gradient-to-br from-neutral to-neutral-200 text-black rounded-lg   transform hover:-translate-y-1 transition duration-400 text-base tracking-wide bg-white"
    >
      Book A Call
    </Button>
  </Link>
  <Link href={'#'}>
    <Button
      borderRadius="1.75rem"
      className="border-transparent px-6 py-2 bg-gradient-to-br from-neutral to-neutral-200 text-neutral rounded-lg   transform hover:-translate-y-1 transition duration-400 text-base tracking-wide bg-red-500"
    >
      Book A Call
    </Button>
  </Link>
</div>

    </div>
  )
}

 

export default HeroSection