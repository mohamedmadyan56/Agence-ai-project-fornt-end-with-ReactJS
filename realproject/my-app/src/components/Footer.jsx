import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-20 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 border-t border-gray-200 dark:border-gray-800'>
      
      {/* Container الأساسي: يتحول لـ Grid في الشاشات الكبيرة */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 pb-10'>
        
        {/* الجزء الأيسر: اللوجو والوصف والقائمة */}
        <div className='flex flex-col gap-6'>
          <img src={assets.logo} className='w-32' alt="Logo" />
          <p className='text-gray-600 dark:text-gray-400 max-w-sm'>
            From Strategy to execution we craft digital solutions that move your business forward.
          </p>
          <ul className='flex gap-5 text-gray-700 dark:text-gray-300 font-medium'>
            <li><a className='hover:text-primary transition-colors' href="#">Home</a></li>
            <li><a className='hover:text-primary transition-colors' href="#services">Services</a></li>
            <li><a className='hover:text-primary transition-colors' href="#our-work">Our Work</a></li>
            <li><a className='hover:text-primary transition-colors' href="#contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* الجزء الأيمن: قسم الاشتراك (Subscribe) */}
        <div className='flex flex-col'>
          <h3 className='font-semibold text-lg text-gray-800 dark:text-white'>Subscribe to our newsletter</h3>
          <p className='text-sm text-gray-600 dark:text-gray-400 mt-2 mb-6'>
            The latest news, articles, and resources sent to your inbox weekly.
          </p>
          
          <div className='flex gap-2 w-full max-w-md'>
            <input 
              type="email" 
              placeholder="Enter your email"
              className='flex-1 p-3 text-sm outline-none rounded bg-transparent border border-gray-300 dark:border-gray-600 dark:text-gray-200 focus:border-primary transition-all' 
            />
            <button className='bg-primary text-white rounded px-6 py-2 hover:bg-opacity-90 transition-all font-medium'>
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* حقوق النشر في الأسفل */}
      <div className='border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-500'>
        <p>copyright 2025 @mohamedmadyan - All Rights Reserved . </p>
        <div className='flex items-center justify-between gap-4 mt-5 '>
          <img className='cursor-pointer' src={assets.facebook_icon} alt="" />
           <img className='cursor-pointer' src={assets.twitter_icon} alt="" />
            <img className='cursor-pointer' src={assets.instagram_icon} alt="" />
             <img className='cursor-pointer' src={assets.linkedin_icon} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Footer