import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image';

const montserrat = Montserrat ({
     subsets: ["latin"],
     weight: ['400', '700'],
});

const Featured = () => {
  return (
    <div className={montserrat.className}>
        <div>
        <div className='mt-20 space-y-2'>
            <h3 className='flex justify-center text-sm font-semibold text-[#23856D]'>Practice Advice</h3>
            <h1 className='font-bold flex justify-center text-3xl'>Featured Posts</h1>
            <p className='flex justify-center text-sm'>Problems trying to resolve the conflict between</p>
            <p className='flex justify-center text-sm'>the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
     <div>
          <div className='flex justify-center mt-6 gap-3'>
            <div>
                <Image src={'/images/card3.jpeg'} width={380} height={100} alt='products'></Image>
            </div>
            <div>
                <Image src={'/images/card.jpeg'} width={380} height={100} alt='products'></Image>
            </div>
            <div>
                <Image src={'/images/card2.jpeg'} width={380} height={100} alt='products'></Image>
          </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Featured