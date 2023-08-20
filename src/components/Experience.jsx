import css from "../assets/css.png";
import html from "../assets/html.png";
import githublogo from "../assets/githublogo.png";

import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import Python from "../assets/Python.png";
import Bash from "../assets/Bash.png";
import Php from "../assets/Php.png";
import Laravel from "../assets/Laravel.png";
import Docker from "../assets/Docker.png";

const Experience = () => {
   const experiences = [
      {
         id: 1,
         src: html,
         title: "HTML",
         style: "shadow-orange-500",
      },
      {
         id: 2,
         src: css,
         title: "CSS",
         style: "shadow-blue-500",
      },
      {
         id: 3,
         src: javascript,
         title: "Javascript",
         style: "shadow-yellow-500",
      },
      {
         id: 4,
         src: react,
         title: "React",
         style: "shadow-blue-500",
      },
      {
         id: 5,
         src: node,
         title: "Node",
         style: "shadow-green-500",
      },
      {
         id: 6,
         src: Python,
         title: "Python",
         style: "shadow-yellow-500",
      },
      {
         id: 7,
         src: nextjs,
         title: "Nextjs",
         style: "shadow-white",
      },
      {
         id: 8,
         src: tailwind,
         title: "Tailwind",
         style: "shadow-sky-500",
      },
      {
         id: 9,
         src: githublogo,
         title: "Github",
         style: "shadow-gray-500",
      },
      {
         id: 10,
         src: Php,
         title: "Php",
         style: "shadow-purple-500",
      },
      {
         id: 11,
         src: Laravel,
         title: "Laravel",
         style: "shadow-red-500",
      },
      {
         id: 12,
         src: Bash,
         title: "Bash",
         style: "shadow-white",
      },
      {
         id: 13,
         src: Docker,
         title: "Docker",
         style: "shadow-blue-500",
      },
   ];
   return (
      <div
         name="Expériences"
         className="bg-gradient-to-b from-gray-800 to-black w-full  py-12"
      >
         <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full  text-white">
            <div>
               <p className="text-4xl front-bold border-b-4 border-gray-500 p-5 inline">
                  Expériences
               </p>
               <p className="py-10">
                  Voici les technologies avec lesquelles j&apos;ai travaillé
               </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
               {experiences.map(({ id, src, title, style }) => (
                  <div
                     key={id}
                     className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                  >
                     <img src={src} alt="" className="w-20 mx-auto " />
                     <p className="mt-4">{title}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Experience;
