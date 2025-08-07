import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {  motion, useAnimation, useInView,} from 'framer-motion'




const First  =({ imageUrl, altText, text, text2, text3, text4, button }: { imageUrl: string, altText: string, text: string, text2: string, text3: string, text4: string, button: string })  => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);
  return (
    <div className='pt-4 w-full'>
        <div className='flex'>
       <div style={{ position: 'relative',  height: '100%', width: '100%' }}>
      <Image
        src={imageUrl="/images/unsplashhhhh.jpg"} 
        alt={altText="image1"}
        width={100}
        height={100}
        
        style={{ objectFit: 'cover' }}
        className='w-full h-100'
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '33%',
          transform: 'translate(-50%, -50%)',
          color: 'blue',
          fontSize: '',
          fontWeight: 'bold',
          textAlign: 'left',
          textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
        }}
        
      >
        
            <motion.div ref={ref} className='text-black text-3xl pl-6 ' transition={{duration:0.5, type:"tween", velocity:150}} animate={{opacity:1,y:30}} initial={{opacity:0,y:10}}>
           <div className='text-black text-[50px]'> {text="Powerful Payments  " }<br></br></div>
           <div className='text-black text-[60px]'> {text="Solutions For"}<br></br></div>
           <div className='text-blue-500 text-[70px]'> {text2="Seamless Transactions"}<br></br></div>
           <div className='text-black text-[15px] font-light pt-1'> {text3="Trust Us to help you navigate the complex landscape and  " }<br></br></div>
           <div className='text-black text-[15px] font-light pb-1'> {text4=" achieve your finanacial goals with peace of mind." }<br></br></div>
           <div className='text-white bg-blue-600 text-[15px] p-2 rounded-md text-center  hover:bg-blue-900' style={{width: '150px'}}> {button="Discovery Now" }<br></br></div>
           </motion.div>
      </div>
    </div>

           

            
            
        </div>
    </div>
  )
}

export default First