import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p >ABOUT <span className='text-gray-700 font-medium'>US</span></p>

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="about" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'> 
        <p>Welcome to Prescripto,your trusted partner in managing your healthcare need conveniently and efficiently.At Prescripto,we understand he challenges individuals face when it to scheduling doctor appointments and managing their health records.</p>
        <p>Prescripto is cmnitted to excellence in healthcare technology. we continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior</p>
        <b className='text-gray-800'>Our Vision </b>
        <p>our vision at Prescripto is to create a seamless healthcare experience for every</p>
        </div>

      </div>
      <div>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>
    <div className='flex flex-col md:flex-row mb-20'>  
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-col text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Efficiency:</b>
        <p>treamlined appointment scheduling that fits into your busy lifestyle.</p>
      </div> 
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-col text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Convenience:</b>
        <p>Access to a network of trusted healthcare profess onals n your area.</p>
      </div> 
      <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-col text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Personalization:</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
      </div> 
     </div>  
      
    </div>
  )
}

export default About
