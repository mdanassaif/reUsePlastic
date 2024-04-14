"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal"
import Image from "next/image";

const content = [
  {
    title: "Plastic Repurposing Solutions",
    description:
      "Witness the transformation of plastic waste into valuable resources. Our platform showcases the journey of discarded plastic being recycled and repurposed, contributing to a sustainable future. Embrace the power of recycling with us.",
    content: (
      <div className="h-full w-full  flex items-center justify-center ">
        <Image
          src="/photaas/img1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="recycling process demo"
        />
      </div>
    ),
  },
  {
    title: "Sustainable Plastic Recycling",
    description:
      "Experience the innovative process of plastic recycling. Our platform highlights the eco-friendly methods used to transform plastic waste into reusable materials, promoting a cleaner environment and a brighter future.",
    content: (
      <div className="h-full w-full  flex items-center justify-center ">
        <Image
          src="/photaas/img2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="recycling process demo"
        />
      </div>
    ),
  },
  {
    title: "Environmentally Conscious Solutions",
    description:
      "Discover how we're making a difference in plastic recycling. Our platform showcases our commitment to sustainability by repurposing plastic waste into innovative products, reducing environmental impact one step at a time.",
    content: (
      <div className="h-full w-full  flex items-center justify-center ">
        <Image
          src="/photaas/img3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="recycling process demo"
        />
      </div>
    ),
  },
  {
    title: "Innovative Plastic Reprocessing",
    description:
      "Explore our cutting-edge methods for recycling plastic. Our platform demonstrates how we're revolutionizing plastic reprocessing, turning waste into valuable resources and paving the way for a greener tomorrow.",
    content: (
      <div className="h-full w-full  flex items-center justify-center ">
        <Image
          src="/photaas/img4.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="recycling process demo"
        />
      </div>
    ),
  },
  {
    title: "Transformative Plastic Recycling",
    description:
      "See how we're reshaping the future of plastic waste. Our platform illustrates the transformative journey of plastic recycling, from waste to usable products, driving sustainability and environmental stewardship.",
    content: (
      <div className="h-full w-full  flex items-center justify-center ">
        <Image
          src="/photaas/img5.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="recycling process demo"
        />
      </div>
    ),
  },
  {
    title: "Revolutionizing Plastic Repurposing",
    description:
    "Embrace our cause to redefine plastic repurposing. Our platform is at the forefront of revolutionizing recycling, transforming discarded plastic into valuable resources for a sustainable tomorrow. Join us in this mission towards a greener, cleaner future.",
    content: (
      <div className="h-full w-full  flex items-center justify-center ">
        <Image
          src="/photaas/img6.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="recycling process demo"
        />
      </div>
    ),
  },
  
];




const WhyUs = () => {
  return (
    <div className="bg-[#aed8fa] h-auto md:h-[40rem]">
      <h1 className="text-5xl text-center  text-black p-20 font-bold">Why Choose Us?</h1>

      <StickyScroll content={content}/>
    </div>
  )
}

export default WhyUs