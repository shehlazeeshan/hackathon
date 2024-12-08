import React from 'react'
import { Montserrat } from 'next/font/google';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const Hero = () => {  
  return (
    <div className={montserrat.className}>
        <div className='bg-[#00b3dd] h-[700px] text-white flex w-full'>
            <div className='w-[50%] h-full ml-[100px] mt-[220px]'>
                <h3>SUMMER 2020</h3><br />
               <h1 className='text-5xl font-semibold'>NEW COLLECTION</h1><br />
               <p className=''>We know how large objects will act,</p><p> but things on a small scale.</p><br />
               <Button className='bg-[#2DC071] text-white font-semibold'>SHOP NOW</Button>
            </div>
            <div className='w-[70%] h-full'>
                <Image src={'/images/carousel1.jpeg'} width={715} height={100} alt='carousel'></Image>
            </div>
           
        </div>
       

    </div>
  )
}

export default Hero