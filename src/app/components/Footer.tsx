import React from 'react'
import { Montserrat, Montserrat_Alternates } from 'next/font/google'
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const montserrat = Montserrat ({
    subsets: ["latin"],
    weight: ['400', '700'],
});

const Footer = () => {
  return (
    <div className={montserrat.className}>
        <div className='w-full mt-20'>
            <div className='flex justify-between w-full borderb-b-2 bg-[#FAFAFA] h-[140px]'>
                 <div className='w-full ml-[200px] h-[142px]'>
                    <h1 className='text-2xl font-bold h-full py-[57px]'>Bandage</h1>
                 </div>
                 <div className='flex gap-6 mr-[200px] py-[57px]'>
                    <span>
                        <FaFacebook className='text-2xl text-[#23A6F0]' />
                    </span>
                    <span>
                        <FiInstagram className='text-2xl text-[#23A6F0]' />
                    </span>
                    <span>
                        <FaTwitter className='text-2xl text-[#23A6F0]' />
                    </span>
                 </div>
            </div>
        </div>
        <div className='w-full flex mt-20 justify-center gap-4'>
            <div className='w-[21%] space-y-4'>
                 <h1 className='text-3xl font-bold'>Company Info</h1>
                 <p>About Us</p>
                 <p>Carrier</p>
                 <p>We are hiring</p>
                 <p>Blog</p>
            </div>
            <div className='w-[13%] space-y-4'>
                 <h1 className='text-3xl font-bold'>Legal</h1>
                 <p>About Us</p>
                 <p>Carrier</p>
                 <p>We are hiring</p>
                 <p>Blog</p>
            </div>
            <div className='w-[13%] space-y-4'>
                 <h1 className='text-3xl font-bold'>Features</h1>
                 <p>Business Marketing</p>
                 <p>User Analytic</p>
                 <p>Live Chat</p>
                 <p>Unlimited Support</p>
            </div>
            <div className='w-[13%] space-y-4'>
                 <h1 className='text-3xl font-bold'>Resources</h1>
                 <p>IOS & Android</p>
                 <p>Watch a Demo</p>
                 <p>Customers</p>
                 <p>API</p>
            </div>
            <div className='w-[30%] space-y-4'>
                 <h1 className='text-3xl font-bold'>Get In Touch</h1>
                 <div className='relative flex'>
                    <Input placeholder='Your Email' />
                    <Button className='bg-[#23A6F0] rounded-none'>Subscribe</Button>
                </div>
                <p>Lore imp sum dolor Amit</p>
            </div>
        </div>
        <div className='h-[70px] w-full flex items-center mt-20 bg-[#FAFAFA] font-semibold'>
            <p className='ml-[200px]'>Made With Love By Finland All Right Reserved </p>
        </div>

    </div>
  )
}

export default Footer