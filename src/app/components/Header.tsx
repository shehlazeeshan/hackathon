import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ChevronDown, Heart, Menu, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const Header = () => {
  return (
    <div className={montserrat.className}>
    <nav className='w-full border-b-2 border-gray-300 p-4'>
      <div className='max-w-7xl flex items-center justify-between'>
        <h1 className='text-2xl font-bold ml-12'>BANDAGE</h1> 
        <div className='hidden md:flex gap-4 mr-12 text-lg'>
          <Link href={'#'} className=' font-normal'>Home</Link>
          <Link href={'#'} className=' font-normal flex items-center gap-1'>Shop <ChevronDown /></Link>
          <Link href={'#'} className=' font-normal'>About</Link>
          <Link href={'#'} className=' font-normal'>Blog</Link> 
          <Link href={'#'} className=' font-normal'>Contact</Link> 
          <Link href={'#'} className=' font-normal'>Pages</Link> 
        </div><br />
        <div className='hidden md:flex gap-8 items-center justify-end'>
        <div className=' items-center flex gap-3 text-[#23A6F0]'>
            <IoPersonOutline />
           <p className='mr-6 font-semibold'>Login/Register</p>
           <Search className='right-2  top-2' />
        </div>
        <span className='rounded-full items-center flex text-[#23A6F0]'>
          <ShoppingCart /><p className='text-sm'>1</p>
        </span>
        <span className='rounded-full items-center flex text-[#23A6F0] '>
          <Heart /><p className='text-sm'>1</p>
        </span>
      </div>
        <Sheet>
            <SheetTrigger className='flex md:hidden' asChild>
                  <Button variant={'outline'} size={'icon'} className='rounded-full'>
                    <Menu />
                  </Button>
            </SheetTrigger>
            <SheetContent>
                 <SheetHeader>
                      <SheetTitle>
                          EXCLUSIVE
                      </SheetTitle>
                 </SheetHeader>
                 <div className='flex flex-col gap-6 mt-6'>
                 <Link href={'#'} className='text-sm font-normal'>Home</Link>
                 <Link href={'#'} className='text-sm font-normal'>Contact</Link>
                 <Link href={'#'} className='text-sm font-normal'>About</Link>
                 <Link href={'#'} className='text-sm font-normal'>Sign Up</Link> 
                 </div>
                 <div className='mt-4'>
                   <div className='relative'>
                      <Input placeholder='What are you looking for?' className='bg-[#F5F5F5] rounded ' />
                      <Search className='absolute right-2 top-2' />
                   </div>
                   <div className='mt-4 space-x-2'>
                   <Button variant={'outline'}  size={"icon"} className='rounded-full'>
                         <Heart />
                   </Button>
                   <Button variant={'outline'} size={'icon'} className='rounded-full'>
                         <ShoppingCart />
                   </Button>
                   </div>
                 </div>
            </SheetContent>
        </Sheet>
      </div>
    </nav>
    </div>
  )
}

export default Header