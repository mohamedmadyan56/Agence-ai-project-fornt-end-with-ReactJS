import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
const OurWork = () => {

  const WorkData = [
    {
      title:' Mobile app marketing',
      description : 'we turn bold ideas into power full digital solutions that connect , engage ....'
      ,image : assets.work_mobile_app

    },
    {
       title:' Dshborboard managment',
      description : 'we help you execute ideas into power full digital solutions that connect , engage ....'
      ,image : assets.work_dashboard_management
    },
  {
       title:' Fitness app Promotion',
      description : 'we help you create a  marketing power full digital stratagy that results , engage ....'
      ,image : assets.work_fitness_app
    }

  ]



  return (
  <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

   <Title title='Reach out to us ' desc='From stratagy to execution , we craft digital solution' />
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full max-w-5xl '>
      {
        WorkData.map((work,index)=>(
          <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
            <img src={work.image} className='w-full rounded-xl ' alt="" />
            <h3>{work.title}</h3>
            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
          </div>
        ))
      }

    </div>

  </div>
  )
}

export default OurWork

