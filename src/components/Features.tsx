'use client'

import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect"



const resueFact = [
    {
      "title": "Recycling Plastic Bottles",
      "desc": "Learn how we process and recycle plastic bottles to reduce waste and promote sustainability.",
      "slug": "recycling-plastic-bottles",
      "isFeatured": true
    },
    {
      "title": "Eco-Friendly Packaging Solutions",
      "desc": "Discover our innovative packaging solutions made from recycled plastic, contributing to a greener environment.",
      "slug": "eco-friendly-packaging",
      "isFeatured": true
    },
    {
      "title": "Community Plastic Cleanup Events",
      "desc": "Join us in our efforts to clean up plastic waste from our communities and protect the environment for future generations.",
      "slug": "community-plastic-cleanup",
      "isFeatured": true
    },
    {
      "title": "Plastic Recycling Education Programs",
      "desc": "Educating communities about the importance of plastic recycling and its positive impact on the environment.",
      "slug": "recycling-education",
      "isFeatured": true
    },
    {
      "title": "Innovative Plastic Repurposing Projects",
      "desc": "Exploring creative ways to repurpose recycled plastic materials into useful products, reducing landfill waste.",
      "slug": "plastic-repurposing-projects",
      "isFeatured": true
    },
    {
      "title": "Sustainable Plastic Manufacturing Practices",
      "desc": "Learn about our commitment to sustainable manufacturing practices aimed at minimizing plastic pollution.",
      "slug": "sustainable-manufacturing",
      "isFeatured": true
    }
  ]
  


const Feature = () => {
  return (
    <div className='p-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-black font-semibold tracking-wide uppercase'>Lorem, ipsum dolor.</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-light text-black sm:text-4xl'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='mt-10'>

            <HoverEffect items={resueFact.map(feature => (
                {
                    title : feature.title,
                    description : feature.desc,
                    link : '/'
                }

            ))} />






            
            </div>
            <div className='mt-10 text-center'>
                <Link href={'/'} className='px-4 py-2 rounded border border-neutral-600 text-white bg-gray-800 hover:bg-gray-100 hover:text-black transition duration-200'>
                    View all featires
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Feature