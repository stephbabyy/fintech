"use client"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'

import { ChevronDown } from 'lucide-react'

import React from 'react'

const DropdownNav = () => {
  return (
    <Dropdown className='text-black flex'>
      <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Home<ChevronDown /></Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions" className='flex-col'>
        <DropdownItem key="home" href="/home">
          Payment Solutions
        </DropdownItem>
        <DropdownItem key="finplan" href="/about">
          Financial Planning
        </DropdownItem>
        <DropdownItem key="banking" href="/about">
          Online Banking
        </DropdownItem>
        <DropdownItem key="finance" href="/about">
          Personal Finance
        </DropdownItem>
        <DropdownItem key="crypto" href="/about">
          Cryptocurrency Financial
        </DropdownItem>
        <DropdownItem key="blockchain" href="/about">
          Blockchain
        </DropdownItem>
      </DropdownMenu>
      </Dropdown>
      <Dropdown className='text-black'>

      <DropdownTrigger>
        <Button variant="bordered" className='text-black'>About<ChevronDown /></Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions">
        <DropdownItem key="sty" href="/about">
          About Style 1
        </DropdownItem>
        <DropdownItem key="style" href="/about">
          About Style 2
        </DropdownItem>
      </DropdownMenu>
      </Dropdown>

      <DropdownTrigger>Services<ChevronDown /></DropdownTrigger>
      <DropdownMenu aria-label="Link Actions">
        <DropdownItem key="serv" href="/about">
          Services Style 1
        </DropdownItem>
        <DropdownItem key="servi" href="/about">
          Services Style 2
        </DropdownItem>
        <DropdownItem key="service" href="/about">
          Services Detail
        </DropdownItem>
      </DropdownMenu>

<DropdownTrigger>Case Studies<ChevronDown /></DropdownTrigger>
<DropdownMenu aria-label="Link Actions">
  <DropdownItem key="case" href="/about">
    Case Studies 1
  </DropdownItem>
  <DropdownItem key="studies" href="/about">
    Case Studies 2
  </DropdownItem>
  <DropdownItem key="detail" href="/about">
    Case Studies Detail
  </DropdownItem>
  
</DropdownMenu>

<DropdownTrigger>Pages<ChevronDown /></DropdownTrigger>
<DropdownMenu aria-label="Link Actions">
  <DropdownItem key="faq" href="/about">
    FAQs
  </DropdownItem>
  <DropdownItem key="pricing" href="/about">
    Pricing
  </DropdownItem>
  <DropdownItem key="partners" href="/about">
    Partners
  </DropdownItem>
</DropdownMenu>

<DropdownTrigger>Blog<ChevronDown /></DropdownTrigger>
<DropdownMenu aria-label="Link Actions">
  <DropdownItem key="bl" href="/about">
    Blog List 1
  </DropdownItem>
  <DropdownItem key="blog" href="/about">
    Blog List 2
  </DropdownItem>
  <DropdownItem key="ab" href="/about">
    Blog Grid
  </DropdownItem>
  <DropdownItem key="list" href="/about">
    Blog Detail 1
  </DropdownItem>
  <DropdownItem key="det" href="/about">
    Blog Detail 2
  </DropdownItem>
  
  
</DropdownMenu>

<DropdownTrigger>Contact<ChevronDown /></DropdownTrigger>
<DropdownMenu aria-label="Link Actions">
  <DropdownItem key="contact" href="/about">
    Contact Style 1
  </DropdownItem>
  <DropdownItem key="tact" href="/about">
    Contact Style 2
  </DropdownItem>
</DropdownMenu>



    </Dropdown>

    
  )
}

export default DropdownNav
