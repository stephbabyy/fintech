'use client'
import React, { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {Carousel,  CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import First from './slide1'
import Second from './slide2'
import Third from './slide3'
import Image from 'next/image'

const Carousell = () => {
    const plugin=React.useRef(Autoplay({delay:2000, stopOnInteraction:false}))
    const images=[
        {
            id:1,
            slide:First,
            imageUrl:"/upsplash.jpg",
            altText:"image1",
            text:"Empower Your Business With",
            text2:"Seemless Payments",
            text3:"Our platform offers secure and reliable investment opportunities in the rapidly growing world of cryptocurrency.",
            text4:" in the rapidly growing world of cryptocurrency.",
            button:"Discovery Now"
        },
        {
            id:2,
            slide:Second,
            imageUrl:"/images/unsplashhhhh.jpg",
            altText:"image2",
            text:"Empower Your Business With",
            text2:"Seemless Payments",
            text3:"Our platform offers secure and reliable investment opportunities in the rapidly growing world of cryptocurrency.",
            text4:" in the rapidly growing world of cryptocurrency.",
            button:"Discovery Now"
        },
        {
            id:3,
            slide:Third,
            imageUrl:"/images/imageslider3.jpg",
            altText:"image3",
            text:"Empower Your Business With",
            text2:"Seemless Payments",
            text3:"Our platform offers secure and reliable investment opportunities in the rapidly growing world of cryptocurrency.",
            text4:" in the rapidly growing world of cryptocurrency.",
            button:"Discovery Now"
        }
    ]
  return (
    <div className="w-[1120px]  justify-center m-auto">
        
        <Carousel
            plugins={[plugin.current]}
            className=' justify-center m-auto'
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
        
        >
            <CarouselContent


            >
                {images.map((id, index) => (
                    <CarouselItem key={index}>
                        <id.slide
                        imageUrl={id.imageUrl}
                        altText={id.altText}
                        text={id.text}
                        text2={id.text2}
                        text3={id.text3}
                        text4={id.text4}
                        button={id.button}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            
                <div className='relative  left-0 transform  text-black' style={{position:'absolute', top:'50%', left:'10px', zIndex:'100'}}><CarouselPrevious /></div>
                <div className='relative  right-0 transform  text-black' style={{position:'absolute', top:'50%', right:'10px', zIndex:'100'}}><CarouselNext/></div> 
            

   
    </Carousel>
    </div>
  )
}



export default Carousell