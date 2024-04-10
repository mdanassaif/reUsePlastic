import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>

      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="brown"
      /> */}
        

    <div className='p-4 relative z-10 w-full text-center'>
    <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-gray-600'>Reuse plastic for Earth</h1>
        <p className='mt-4 font-normal text-base md:text-lg  text-teal-900 max-w-lg mx-auto'>Join us in turning plastic trash into valuable resources for a greener tomorrow.</p>
    </div>

    <div className="mt-4">
        <Link href={'#'}> <Button
  borderRadius="1.75rem"
  className="border-transparent px-6 py-2 bg-gradient-to-br from-neutral to-neutral-200 text-neutral rounded-lg font-bold  transform hover:-translate-y-1 transition duration-400"
>
  Book A Call
</Button>
</Link>
    </div>
    </div>
  )
}

 

export default HeroSection