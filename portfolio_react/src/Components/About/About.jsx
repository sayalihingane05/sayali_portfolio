import React from 'react'
import { IoArrowForward } from 'react-icons/io5'
import AboutImg from '../../assets/AboutImg.jpg'

export const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold '>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className='md:h:100' src={AboutImg} alt="About img"/>

                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>

                        <span className="w-96">
                            <h1 className='text-xl md:text-2xl font-semibold'>Frontend Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                               I am a Frontend Developer with a strong focus on building responsive, user-friendly, and visually appealing web applications. I specialize in creating modern interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS. 
                            </p>
                            
                            </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>

                        <span className="w-96">
                            <h1 className='text-xl md:text-2xl font-semibold'>Backend developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                              I focus on writing clean, maintainable code and implementing proper error handling, validation, and security practices. I enjoy solving backend problems and integrating frontend applications with reliable backend services.  
                            </p>
                            
                            </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1'/>

                        <span className="w-96">
                            <h1 className='text-xl md:text-2xl font-semibold'>
                                Database Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                               I focus on creating well-structured databases, ensuring data integrity, and optimizing queries for better performance. I also have experience connecting databases with backend applications using JDBC. 
                            </p>
                            
                            </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}
