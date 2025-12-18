// // import React from 'react'
// // import avatarImg from "../assets/avatarImg.jpg"
// // const Home = () => {
// //   return (
// //     <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
// //         <div className='md:w-2/4 md:pt-10'>
// //         <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
// //             Hello' I am Sayali</h1>
// //             <p>I’m a passionate Full-Stack Developer with a strong foundation in React, Java, SQL, and modern web technologies. I enjoy building responsive, user-friendly applications and continuously improving my skills by working on real-world projects.</p>
// //             <button className='mt-5 md:md-10 text-white py02 px-3 text-5m md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
            
// //             </div>
// //         { <div><img className='w-40 h-40 md:w-80 md:h-80 rounded-full object-cover' src={avatarImg} alt=''/></div> }


// //     </div>
// //   )
// // }

// // export default Home

// import React from 'react'
// import avatarImg from "../assets/avatarImg.jpg"

// const Home = () => {
//   return (
//     <div className='text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20'>
      
//       {/* Text Section */}
//       <div className='md:w-2/4 md:pt-10'>
//         <h1 className='text-3xl md:text-6xl font-bold leading-snug md:leading-tight tracking-tighter'>
//           Hello, I am Sayali
//         </h1>
//         <p className='mt-4 md:mt-6 text-sm md:text-base'>
//           I’m a passionate Full-Stack Developer with a strong foundation in React, Java, SQL, and modern web technologies. I enjoy building responsive, user-friendly applications and continuously improving my skills by working on real-world projects.
//         </p>
//         <button className='mt-5 text-white py-2 px-4 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
//           Contact Me
//         </button>
//       </div>

//       {/* Image Section */}
//       <div className='mt-10 md:mt-0 md:ml-10 flex justify-center'>
//         <img 
//           src={avatarImg} 
//           alt="Avatar" 
//           className='w-40 h-40 md:w-80 md:h-80 rounded-full object-cover'
//         />
//       </div>
      
//     </div>
//   )
// }

// export default Home;


import React from "react";
import avatarImg from "../assets/avatarImg.jpg";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-20">
      
      <div className="md:w-2/4 md:pr-10 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold leading-snug">
          Hello, I am Sayali
        </h1>
        <p className="mt-4 md:mt-6 text-sm md:text-base">
          I’m a passionate Full-Stack Developer with strong React, Java, SQL skills. I enjoy building responsive applications and improving my skills through real-world projects.
        </p>
        <button className="mt-5 bg-[#465697] text-white py-2 px-4 md:py-2 md:px-6 rounded-3xl hover:scale-105 transition duration-300 font-semibold">
          Contact Me
        </button>
      </div>

      <div className="mt-10 md:mt-0 flex justify-center">
        <img
          src={avatarImg}
          alt="Avatar"
          className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover"
        />
      </div>

    </div>
  );
};

export default Home;
