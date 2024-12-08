import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'

const montserrat = Montserrat ({
    subsets: ["latin"],
    weight: ['400', '700'],
})

const BestSeller = () => {
  return (
    <div className={montserrat.className}>
      <div className='h-[1300px]'>
        <div className='mt-20 space-y-2'>
            <h3 className='flex justify-center text-xl'>Featured Products</h3>
            <h1 className='font-bold flex justify-center text-3xl'>BESTSELLER PRODUCTS</h1>
            <p className='flex justify-center text-sm'>Problems trying to resolve the conflict between</p>
        </div>
        <div className='flex justify-center mt-6 gap-2'>
            <div>
                <Image src={'/images/product.jpeg'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.jepg'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div>
                <Image src={'/images/product2.jpeg'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.jpeg'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div>
                <Image src={'/images/product3.jpeg'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.jpeg'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div>
                <Image src={'/images/product4.jpeg'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.jpeg'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
        </div>
        <div className='flex justify-center gap-2 mt-32'>
            <div>
                <Image src={'/images/product5.jpeg'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.jpeg'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div className=''>
                <Image src={'/images/product6.jpeg'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.jpeg'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div>
                <Image src={'/images/product7.jpeg'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.jpeg'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
            <div>
                <Image src={'/images/product8.jepg'} width={200} height={100} alt='products'></Image>
                <div className='w-full mt-8 space-y-2'>
                <h3 className='text-lg font-bold w-full justify-center ml-7'>Graphic Design</h3>
                <h6 className='text-[16px] font-medium ml-[24px]'>English Department</h6>
                <span className='flex justify-center gap-3 mr-4'>
                <p className='text-[#BDBDBD] text-xs font-thin'>$16.48</p>
                <p className='text-[#23856D] text-xs font-semibold'>$6.48</p>
                </span>
                <span className=''><Image className='ml-[70px]' src={'/images/product-colors.jpeg'} width={50} height={10} alt='colors'></Image></span>
                </div>
            </div>
        </div>
        </div>
        

    </div>
  )
}

export default BestSeller