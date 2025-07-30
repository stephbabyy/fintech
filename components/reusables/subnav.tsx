
import React from 'react'
import {  ChevronDown, Mail, MapPin } from 'lucide-react'
import { RxDividerVertical } from 'react-icons/rx'
import { CiFacebook } from 'react-icons/ci'
import { TiSocialLinkedinCircular, TiSocialTwitterCircular } from 'react-icons/ti'
import { FaInstagram} from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
import Image from 'next/image'

import { NavigationMenuDemo } from './index'
import { FaPhone } from 'react-icons/fa6'
import Carousell from './carouselslide'   
import Services from './services'
import Avatars from './avatarr'
import { Button } from '../ui/button'
import { IoCall } from 'react-icons/io5'
        

const SubNav = () => {
  return (
    
     <div>
     <div className='bg-blue-950 w-full flex justify-between'>
         <div className='flex gap-5 p-3'>
             <div className='flex gap-2'>
                 <MapPin className='text-white'/>
                 <p className='text-white'>
                     160 Broadway 15th Floor New York  
                 </p>
             </div>
             <div className='flex gap-2'>
                 <Mail className='text-white'/>
                 <p className='text-white'>
                 hi.avitex@gmail.com
                 </p>
             </div>
         </div>
         <div className='text-white flex justify-between p-3' style={{position:"static"}}>
         <div className='flex gap-2'>

             <p>English</p><ChevronDown /><RxDividerVertical className='text-[25px] opacity-30'/>
         </div>
         <div className='flex gap-2 text-[25px]'>
         <CiFacebook /><TiSocialLinkedinCircular className='text-[28px]' /><TiSocialTwitterCircular className='text-[28px]' /><FaInstagram /><FaYoutube />
         </div>
         </div>
     </div>
     <div className='flex gap-5 bg-white  justify-evenly'>
         <div className='pt-2'>
             <Image src="/images/logo.webp" alt="toplogo" width={200} height={100} />
         </div>
         <div className='z-10'>
            <NavigationMenuDemo/></div>
            <div className='flex gap-2 '><div className='pt-4'><FaPhone className='text-[35px] bg-blue-600 rounded-full p-2 text-white' /></div><div className='flex-col gap-1 pt-3'> <p className='text-black'>Free Consultancy</p><p className='font-bold text-black'>+123 456 7890</p></div></div>
            </div>
            <div className='pt-4 w-full '>
                <Carousell/>
            </div>
            <div>
                <h1 className='text-center text-black text-[50px] font-bold pt-10 mt-4 '>Our Services</h1>
            </div>
            <div>
                <Services />
            </div>

            <div className='pt-10 w-full flex'>
                <Image src="/images/mainimage.webp" alt="imagemain" width={700} height={100} className='w-1/2'></Image>
                <div className='bg-[#e6e3e3] w-6/12'> <div className=' flex pt-10 pl-9 '> <div> <Avatars /></div><div> <p className='text-gray-600  text-[16px] font-bold'>Trusted By 50M+ people </p> <p className='text-gray-600 font-bold text-[16px]'>Around the globe</p></div></div>
                <div className='ml-17'><p className='text-black text-[50px] font-bold flex-col pt-7'>Payment Gateway Services</p>
                
                <p>We Provide reliable and secure gateway payment services for businesses of all sizes. With our cutting-edge technology and 24/7 customer support, you can easily accept payments from customers all over the world.</p></div>
                
                <div className='pt-10 ml-17 flex gap-x-2'><Button className='bg-primary rounded-3xl p-6 text-white font-bold text-[20px]'>Get Started</Button>
                <Button className='bg-white rounded-3xl p-6 text-black text-[20px] font-bold'><div className='flex gap-x-2'><IoCall  className='mt-2' style={{fontSize:"25px"}}/><p>(00) 123 456 789</p></div></Button>
                    </div>
                    </div>
            </div>



     </div>
  )
}

export default SubNav