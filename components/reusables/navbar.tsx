"use client"
import Link from 'next/link'
import * as React from "react"

import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Minus } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    
  } from "@/components/ui/navigation-menu"

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    
  ]
  
  export function NavigationMenuDemo() {
    return (
      <NavigationMenu viewport={false}>
        <NavigationMenuList className='pt-4'>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-[18px] font-semibold'>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-4 md:w-[400px] lg:w-[200px] flex-col text-[15px] font-medium">
               
                <NavigationMenuLink className='hover:text-blue-500'>
                    <div className='flex gap-2'>
                     <Link href=''><p className='hover:text-blue-500'>Payment Solution</p></Link>
                    </div>
                </NavigationMenuLink>
                <NavigationMenuLink><Link href=""><p className='hover:text-blue-500'>Financial Planning</p></Link></NavigationMenuLink>
                <NavigationMenuLink><Link href=''><p className='hover:text-blue-500'> Online Banking</p></Link></NavigationMenuLink>
               <NavigationMenuLink><Link href=""><p className='hover:text-blue-500'>Personal Finance</p></Link></NavigationMenuLink> 
                <NavigationMenuLink><Link href=""><p className='hover:text-blue-500'>Cryptocurrency Financial</p></Link></NavigationMenuLink>
                <NavigationMenuLink><Link href=""><p className='hover:text-blue-500'>Blockchain</p></Link></NavigationMenuLink>
                
                
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-[18px] font-semibold hover:text-blue-500'>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4 md:w-[300px]  lg:w-[200px] text-[15px] flex-col font-medium">
                <NavigationMenuLink><Link href=""><p className='hover:text-blue-500'>About Style 1</p></Link></NavigationMenuLink>
                <NavigationMenuLink><Link href=""><p className='hover:text-blue-500'>About Style 2</p></Link></NavigationMenuLink>
                
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-[18px] font-semibold hover:text-blue-500'>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid flex-col w-[200px] text-[15px] gap-4 font-medium">
                <NavigationMenuLink asChild>
                    <Link href="">
                <p className='hover:text-blue-500'>Service Style 1</p></Link></NavigationMenuLink>
               <NavigationMenuLink> <Link href=""><p className='hover:text-blue-500'>Service Style 2</p></Link></NavigationMenuLink>
                <NavigationMenuLink><Link href=""><p className='hover:text-blue-500'>Service Style Details</p></Link></NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
  
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-[18px] font-semibold hover:text-blue-500'>Case Studies</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium hover:text-blue-500">Case Study Style 1</div>
                      
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium hover:text-blue-500">Case Study Style 2</div>
                      
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium hover:text-blue-500">Case Study Style Details</div>
                      
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-[18px] font-semibold hover:text-blue-500 '>Pages</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4 font-medium">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#" className='hover:text-blue-500'>FAQs</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className='hover:text-blue-500'>Pricing</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className='hover:text-blue-500'>Partners</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-[18px] font-semibold hover:text-blue-500'>Blog</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4 font-medium">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2 hover:text-blue-500">
                      
                      Blog List 1
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2 hover:text-blue-500">
                      
                      Blog List 2
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2 hover:text-blue-500">
                    
                      Blog Grid
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2 hover:text-blue-500">
                    
                      Blog Detail 1
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2 hover:text-blue-500">
                    
                      Blog Detail 2
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-[18px] font-semibold hover:text-blue-500'>Contact</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4 font-medium">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2 hover:text-blue-500">
                      
                      Contact Style 1
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex-row items-center gap-2 hover:text-blue-500">
                      
                      Contact Style 2
                    </Link>
                  </NavigationMenuLink>
                  
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
      
      
    )
  }
  
  function ListItem({
    title,
    children,
    href,
    ...props
  }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
      <li {...props}>
        <NavigationMenuLink asChild>
          <Link href={href}>
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  }

  

export default NavigationMenuDemo