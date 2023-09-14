import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import malt from "../assets/malt.png";

const SocialLinks = () => {
   const links = [
      {
         id: 0,
         child: (
            <>
               Malt <img src={malt} alt="malt" className="w-7 h-7" />
            </>
         ),
         href: "https://www.malt.fr/profile/ahmedbouhafa",
         style: "rounded-tr-md items-center",
      },
      {
         id: 1,
         child: (
            <>
               LinkedIn <FaLinkedin size={30} />
            </>
         ),
         href: "https://www.linkedin.com/in/ahmed-bouhafa-6276671a7/",
      },
      {
         id: 2,
         child: (
            <>
               Instagram <FaInstagramSquare size={30} />
            </>
         ),
         href: "https://www.instagram.com/bhf_consulting/",
      },
      {
         id: 3,
         child: (
            <>
               Mail <HiOutlineMail size={30} />
            </>
         ),
         href: "mailto:contact@bhfconsulting.fr",
         style: "rounded-br-md",
      },
   ];

   return (
      <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
         <ul>
            {links.map(({ id, child, href, style }) => (
               <li
                  key={id}
                  className={
                     "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500" +
                     " " +
                     style
                  }
               >
                  <a
                     href={href}
                     className="flex justify-between items-center w-full text-white"
                  >
                     {child}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default SocialLinks;
