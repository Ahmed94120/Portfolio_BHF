import travaux from "../assets/portfolio/travaux.png";
import RestaurantWPBHF from "../assets/portfolio/RestaurantWPBHF.png";
import rendredeserthabitable from "../assets/portfolio/rendredeserthabitable.png";
import Dragonballwebsite from "../assets/portfolio/Dragonballwebsite.png";
import photo1 from "../assets/portfolio/photo1.jpg";
import photo2 from "../assets/portfolio/photo2.jpg";
import photo3 from "../assets/portfolio/photo3.jpg";
import photo4 from "../assets/portfolio/photo4.jpg";
import photo5 from "../assets/portfolio/photo5.jpg";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const portoflio = () => {
   const portfolios = [
      {
         id: 1,
         src: RestaurantWPBHF,
         a: "https://ahmed94120.github.io/RestaurantWPBHF/",
      },
      {
         id: 2,
         src: rendredeserthabitable,
         a: "https://rendreledeserthabitable.com",
      },
      {
         id: 3,
         src: Dragonballwebsite,
         a: "https://mm01.thorelnicolas.fr/archives/a20/bouhafaa/projet/",
      },
      {
         id: 4,
         src: travaux,
      },
      {
         id: 5,
         src: travaux,
      },
      {
         id: 6,
         src: travaux,
      },
   ];
   const slides = [
      {
         url: photo1,
         href: photo1,
      },
      {
         url: photo2,
         href: photo2,
      },
      {
         url: photo3,
         href: photo3,
      },
      {
         url: photo4,
         href: photo4,
      },
      {
         url: photo5,
         href: photo5,
      },
   ];

   const [currentIndex, setCurrentIndex] = useState(0);

   const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   };

   const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   };

   const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
   };
   return (
      <div>
         <div
            name="Portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-14"
         >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
               <div className="pb-8">
                  <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                     Portfolio - Websites
                  </p>
                  <p className="py-6">
                     Consultez quelques projets que j&apos;ai pu faire
                  </p>
               </div>
               <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                  {portfolios.map(({ id, src, a }) => (
                     <div
                        key={id}
                        className="shadow-md shadow-gray-600 rounded-lg"
                     >
                        <img
                           src={src}
                           alt=""
                           className="rounded-md duration-200 hover:scale-105 w-2/3 mx-auto"
                        />
                        <div className="flex items-center justify-center">
                           <button className="w-1/2 px-6 py-6 m-4 duration-300 hover:scale-105">
                              <a href={a}>Visiter</a>
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div
            name="Portfolio - Drone"
            className="bg-gradient-to-b  from-gray-800 to to-black w-full text-white py-14"
         >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
               <div className="pb-8">
                  <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                     Portfolio - Drone
                  </p>
                  <p className="py-6">
                     Consultez quelques plans de drone que j&apos;ai pu faire
                  </p>
               </div>
               <div className=" max-w-[800px] h-[auto] w-full m-auto py-16 px-4 relative group">
                  <a
                     href={slides[currentIndex].href}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img
                        src={slides[currentIndex].url}
                        alt="Votre description ici"
                        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                     />
                  </a>
                  {/* Left Arrow */}
                  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                     <BsChevronCompactLeft onClick={prevSlide} size={30} />
                  </div>
                  {/* Right Arrow */}
                  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                     <BsChevronCompactRight onClick={nextSlide} size={30} />
                  </div>
                  <div className="flex top-4 justify-center py-2">
                     {slides.map((slide, slideIndex) => (
                        <div
                           key={slideIndex}
                           onClick={() => goToSlide(slideIndex)}
                           className="text-2xl cursor-pointer"
                        >
                           <RxDotFilled />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default portoflio;
