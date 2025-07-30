'use client'
import React from 'react'
import {Avatar, AvatarGroup, AvatarIcon} from "@heroui/avatar";

const Avatars = () => {
  return (
    <div>

<div className=" ml-10 ">
  <AvatarGroup isBordered>
      <Avatar src="/images/avatarrr.webp" className="" />
      
      <Avatar  src="/images/avatar1.webp" />
    
      <Avatar  src="/images/avatar2.webp" />
      <Avatar  name="5M" className='bg-white text-black font-bold' />
      </AvatarGroup>
      </div>


    </div>
  )
}

export default Avatars