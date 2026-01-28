import React from 'react'
import assets from '../assets/assets'

export const Hero = () => {
  return (
    <div id='Hero' className='flex flex-col items-center gap-6 py-20 px-0  text-center w-full overflow-hidden text-gray-700 dark:text-white'>


    <div className='inline-flex items-center gap-2 border border-gray-300 rounded-full pr-4 p-1.5'>
        <img className='w-20' src={assets.group_profile}  alt="" />
        <p className='text-xs font-medium'>Truseted by +10k people </p>
    </div>
    <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Turning imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4D84E5] bg-clip-text text-transparent'>digital</span> impact </h1>

    <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 pb-3'>Lorem ipsum dolor sit amet psum dolor sit amet psum dolor sit amet consectetur, adipisicing elit. Officia neque aut accusamus.</p>

    <div className='relative'>
        <img src={assets.hero_img} className='w-full max-w-[800px]' alt="" />
        <img src={assets.bgImage1} alt=""  className="absolute -top-[800px] -right-[160px] 
             
             lg:-top-[500px] lg:-right-[500px] dark:hidden"  />

    </div>
    </div>
 

)
}
