import React from "react";
import profile from "../assets/Profile.jpeg";
import { RxDoubleArrowRight } from "react-icons/rx";

const Accueil = () => {
   return (
      <div
         name="home"
         className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
      >
         <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row">
            <div className="flex flex-col justify-center h-full mf:mt-100">
               <h2 className="text-3xl sm:text-6xl front-bold text-white">
                  🚀 Bienvenu sur mon site de prestations! 🌐
               </h2>
               <p className="text-gray-500 py-4 max-w-md">
                  {" "}
                  Salut, je suis Ahmed, passionné par la technologie et la
                  créativité. Je suis développeur web freelance et étudiant en
                  ingénierie de la cybersécurité. Avec des compétences en React,
                  Vue.js, Laravel et WordPress, je crée des sites web modernes
                  et uniques qui répondent à vos besoins. Explorez mes services
                  sur mon site et contactez-moi via la page de contact.
               </p>

               <div>
                  <button className=" group text-white w-fit px-7 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                     Portfolio &nbsp;
                     <span className="group-hover:rotate-90 duration-300">
                        <RxDoubleArrowRight size={20} className="ml-1" />
                     </span>
                  </button>
               </div>
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default Accueil;
