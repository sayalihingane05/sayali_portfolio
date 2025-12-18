// import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
// import React, { useState } from 'react'

// const Navbar = () => {

//     const [menu,openMenu]=useState(false);
//     const [showMenu,setShowmenu]=useState(true);
//   return (
//     <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
//         <span className="text-xl font-bold tracking-wide">portfolio</span>
//         <ul className={`${menu? "block": "hidden"
//         } mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-ocapity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
            
//             <a href="#About">
//             <li className='text-md transition-all duration-300 p-1 md:p-0'>          
//             About </li>
//             </a>

//             <a href="#Certificates">
//             <li className='text-md transition-all duration-300 p-1 md:p-0'>          
//             Certificates </li>
//             </a>

//             <a href="#Projects">
//             <li className='text-md transition-all duration-300 p-1 md:p-0'>          
//             Projects </li>
//             </a>

//             <a href="#Footer">
//             <li className='text-md transition-all duration-300 p-1 md:p-0'>          
//             Contact </li>
//             </a>

//         </ul>
//         {
//             showMenu?(
//                 <RiMenu2Line size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' onClick={()=>{openMenu(!menu); setShowmenu(!showMenu)}}/>
//             ):(
//                 <RiCloseLine size={30}className='md:hidden absolute right-10 top-6 transition-all duration-300'/>
//             )
//         }
//     </nav>
//   )
// }

// export default Navbar;


import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-6 md:px-20 py-6">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul className={`md:flex md:gap-6 md:static absolute top-20 left-0 w-full md:w-auto bg-black md:bg-transparent p-6 md:p-0 rounded-xl transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
        {["About", "Certificates", "Projects", "Contact"].map((item) => (
          <li key={item} className="text-md py-2 md:py-0 text-center">
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        {menuOpen ? (
          <RiCloseLine size={30} onClick={() => setMenuOpen(false)} />
        ) : (
          <RiMenu2Line size={30} onClick={() => setMenuOpen(true)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
