'use client'
import React from 'react'
import {Avatar, AvatarGroup, AvatarIcon} from "@heroui/avatar";

const Avatars = () => {
  return (
    <div>

<div className=" ml-10 justify-center m-auto mt-36">
  <AvatarGroup >
      <Avatar  src="/images/avatarrr.webp" className="z-10" />
      
      <Avatar src="/images/avatar1.webp" />
    
      <Avatar src="/images/avatar2.webp" />
      <Avatar name="5M" className='bg-white text-black font-bold' />
      </AvatarGroup>
      </div>


    </div>
  )
}

export default Avatars