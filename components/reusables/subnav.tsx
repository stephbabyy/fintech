
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

            <div className='pt-10 w-full flex justify-between'>
                <Image src="/images/mainimage.webp" alt="imagemain" width={700} height={100} className='w-1/2'></Image>
                <div className='bg-[#e6e3e3] w-6/12'>   <Avatars /></div>
            </div>



     </div>
  )
}

export default SubNav