import React from 'react'
import avatarImg from "../assets/avatarImg.jpg"
const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
            Hello' I am Sayali</h1>
            <p>I’m a passionate Full-Stack Developer with a strong foundation in React, Java, SQL, and modern web technologies. I enjoy building responsive, user-friendly applications and continuously improving my skills by working on real-world projects.</p>
            <button className='mt-5 md:md-10 text-white py02 px-3 text-5m md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
            
            </div>
        { <div><img className='w-100 h-100' src={avatarImg} alt=''/></div> }







    </div>
  )
}

export default Home