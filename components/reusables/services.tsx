'use client'
import React from 'react'
import { Button, Card, CardBody, CardFooter } from '@heroui/react'
import { BsCashCoin } from 'react-icons/bs'
import Link from 'next/link'
import { TbReportSearch, TbSettingsExclamation } from 'react-icons/tb'
import { FaRegHandshake } from 'react-icons/fa'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { MdOutlineRealEstateAgent } from 'react-icons/md'
import { PiGraduationCapDuotone } from 'react-icons/pi'


const Services = () => {
  return (
    <div>

    <div className='flex justify-evenly gap-7 pl-4'>
        <div className='hover:shadow-gray-500 hover:shadow-2xl  hover:bg-gray-100 rounded-2xl'>
            <Link href="">
    
        <Card className='bg-white  border-1 border-gray-300 rounded-2xl p-8 hover:zoom-in-translate-full hover:-zoom-in-45'>
           <CardBody>
            <div className='flex justify-between'>
           <BsCashCoin className='text-blue-500 text-[30px]' />
           <h1 className='text-gray-600 text-[30px] font-bold opacity-60'>1</h1>
           </div>
           <p className='text-black text-[25px] font-bold'>Crptocurrency Trading</p>
           <p>Experience the excitement and potential of the crypto market with our expert trading services.</p>
           </CardBody>
        </Card>
        </Link>
        </div>

        <div className='hover:shadow-gray-500 hover:shadow-2xl  hover:bg-gray-100 rounded-2xl'>
            <Link href="">
    
        <Card className='bg-white  border-1 border-gray-300 rounded-2xl p-8 hover:zoom-in-translate-full hover:-zoom-in-45'>
           <CardBody>
            <div className='flex justify-between'>
            
            
            <FaRegHandshake className='text-blue-500 text-[30px]' />
        
           <h1 className='text-gray-600 text-[30px] font-bold opacity-60'>2</h1>
           </div>
           <p className='text-black text-[25px] font-bold'>Portfolio Management</p>
           <p>Experience the excitement and potential of the crypto market with our expert trading services.</p>
           </CardBody>
        </Card>
        </Link>
        </div>

        <div className='hover:shadow-gray-500 hover:shadow-2xl  hover:bg-gray-100 rounded-2xl'>
            <Link href="">
    
        <Card className='bg-white  border-1 border-gray-300 rounded-2xl p-8 hover:zoom-in-translate-full hover:-zoom-in-45'>
           <CardBody>
            <div className='flex justify-between'>
            <MdOutlineRealEstateAgent className='text-blue-500 text-[30px]' />
           <h1 className='text-gray-600 text-[30px] font-bold opacity-60'>3</h1>
           </div>
           <p className='text-black text-[25px] font-bold'>Investment Advice</p>
           <p>Experience the excitement and potential of the crypto market with our expert trading services.</p>
           </CardBody>
        </Card>
        </Link>
        </div>

       
    </div>

    <div className='flex justify-evenly gap-7 pt-7 pl-4'>
        <div className='hover:shadow-gray-500 hover:shadow-2xl  hover:bg-gray-100 rounded-2xl '>
            <Link href="">
    
        <Card className='bg-white  border-1 border-gray-300 rounded-2xl p-8 hover:zoom-in-translate-full hover:-zoom-in-45'>
           <CardBody>
            <div className='flex justify-between'>
            <TbSettingsExclamation className='text-blue-500 text-[30px]' />
           <h1 className='text-gray-600 text-[30px] font-bold opacity-60'>4</h1>
           </div>
           <p className='text-black text-[25px] font-bold'>Risk Management</p>
           <p>Experience the excitement and potential of the crypto market with our expert trading services.</p>
           </CardBody>
        </Card>
        </Link>
        </div>

        <div className='hover:shadow-gray-500 hover:shadow-2xl  hover:bg-gray-100 rounded-2xl'>
            <Link href="">
    
        <Card className='bg-white  border-1 border-gray-300 rounded-2xl p-8 hover:zoom-in-translate-full hover:-zoom-in-45'>
           <CardBody>
            <div className='flex justify-between'>
           <TbReportSearch className='text-blue-500 text-[30px]' />
           <h1 className='text-gray-600 text-[30px] font-bold opacity-60'>5</h1>
           </div>
           <p className='text-black text-[25px] font-bold'>Research and Analysis</p>
           <p>Experience the excitement and potential of the crypto market with our expert trading services.</p>
           </CardBody>
        </Card>
        </Link>
        </div>

        <div className='hover:shadow-gray-500 hover:shadow-2xl  hover:bg-gray-100 rounded-2xl'>
            <Link href="">
    
        <Card className='bg-white  border-1 border-gray-300 rounded-2xl p-8 hover:zoom-in-translate-full hover:-zoom-in-45'>
           <CardBody>
            <div className='flex justify-between'>
            <PiGraduationCapDuotone className='text-blue-500 text-[30px]' />
           <h1 className='text-gray-600 text-[30px] font-bold opacity-60'>6</h1>
           </div>
           <p className='text-black text-[25px] font-bold'>Education and Resources</p>
           <p>Experience the excitement and potential of the crypto market with our expert trading services.</p>
           </CardBody>
        </Card>
        </Link>
        </div>

       
    </div>




    </div>
  )
}

export default Services