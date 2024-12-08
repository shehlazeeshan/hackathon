import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const montserrat = Montserrat ({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const Vita = () => {
  return (
    <div className={montserrat.className}>
        <div className='bg-[#23856D] h-[700px] text-white flex w-full'>
            <div className='w-[50%] h-full ml-[100px] mt-[220px]'>
                <h3>SUMMER 2020</h3><br />
               <h1 className='text-7xl font-semibold w-[500px]'>Vita Classic Product</h1><br />
               <p className=''>We know how large objects will act,</p><p> but things on a small scale.</p><br />
               <span className='flex gap-6'>
                 <p className='text-2xl'>$16.48</p>
                 <Button className='bg-[#2DC071] text-white font-semibold'>ADD TO CART</Button>
               </span>
               
            </div>
            <div className='w-[70%] h-full'>
                <Image src={'/images/carousel2.jpeg'} width={521} height={100} alt='carousel'></Image>
            </div>
           
        </div>
       

    </div>
  )
}

export default Vita