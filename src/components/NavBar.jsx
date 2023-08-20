import React from "react";
import LogoBHF from "../assets/logo_BHF-transparent.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import malt from "../assets/malt.png";

const NavBar = () => {
   const [nav, setNav] = React.useState(false);
   const linkssocialnetwork = [
      {
         id: 0,
         child: (
            <>
               <img src={malt} alt="malt" className="h-6" />
            </>
         ),
         href: "https://www.malt.fr/profile/ahmedbouhafa",
      },
      {
         id: 1,
         child: (
            <>
               <FaLinkedin size={30} />
            </>
         ),
         href: "https://www.linkedin.com/in/ahmed-bouhafa-6276671a7/",
      },
      {
         id: 2,
         child: (
            <>
               <FaInstagramSquare size={30} />
            </>
         ),
         href: "https://www.instagram.com/bhf_services/",
      },
      {
         id: 3,
         child: (
            <>
               <HiOutlineMail size={30} />
            </>
         ),
         href: "mailto:ahmed.bhfpro@gmail.com",
      },
   ];

   const links = [
      {
         id: 1,
         link: "Accueil",
         title: "Accueil",
      },
      {
         id: 2,
         link: "about",
         title: <>À&nbsp;propos</>,
      },
      {
         id: 3,
         link: "Portfolio",
         title: "Portfolio",
      },
      {
         id: 4,
         link: "Expériences",
         title: "Expériences",
      },
      {
         id: 5,
         link: "Contact",
         title: "Contact",
      },
   ];
   return (
      <div className="flex justify-between items-center w-full px-4 text-white bg-black md:fixed">
         <div>
            <img src={LogoBHF} alt="Logo BHF" className="h-16 p-1" />
         </div>
         <div>
            <ul className="hidden md:flex">
               {links.map(({ id, title, link }) => (
                  <li
                     key={id}
                     className="px-6 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 "
                  >
                     <Link to={link} smooth duration={500}>
                        {title}
                     </Link>
                  </li>
               ))}
            </ul>
            {/*mobile*/}
            <div className="flex justify-between items-center">
               <div>
                  {/* Réseaux sociaux mobile*/}
                  <ul className="md:hidden flex flex-row justify-center items-center gap-2 h-1/2 pr-3 sm:pr-10 sm:gap-3">
                     {linkssocialnetwork.map(({ id, child, href }) => (
                        <li key={id} className="">
                           <a href={href} className="h-1/2">
                              {child}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <div
                     onClick={() => setNav(!nav)}
                     className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
                  >
                     {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                  </div>
                  {nav && (
                     <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 to-gray-500">
                        {links.map(({ id, title, link }) => (
                           <li
                              key={id}
                              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200 text-gray-500 hover:text-white"
                           >
                              <Link
                                 onClick={() => setNav(!nav)}
                                 to={link}
                                 smooth
                                 duration={500}
                              >
                                 {title}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default NavBar;
