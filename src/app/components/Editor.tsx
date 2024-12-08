import React from 'react'
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const Editor = () => {
  return (
    <div className={montserrat.className}>
        <div className='h-[700px] bg-[#FAFAFA]'>
        <div className=''><br /><br /><br /><br />
            <h1 className='font-bold flex justify-center text-3xl'>EDITORS PICK</h1>
            <p className='flex justify-center text-sm'>Problems trying to resolve the conflict between</p>
        </div>
        <div className='flex w-[100%] gap-6 justify-center py-4 mt-4 '>
            <div>
                <Image src={'/images/col.jpeg'} width={500} height={100} alt='image'></Image>
            </div>
            <div>
                <Image src={'/images/col2.jpeg'} width={236} height={100} alt='image'></Image>
            </div>
            <div className=''>
                <span>
                    <Image src={'/images/card-item.jpeg'} width={231} height={50} alt='image'></Image>
                </span><br />
                <span>
                    <Image src={'/images/card-item2.jpeg'} width={231} height={50} alt='image'></Image>
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Editor