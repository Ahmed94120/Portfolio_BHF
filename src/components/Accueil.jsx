import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from "react-scroll";

const Accueil = () => {
   return (
      <div
         name="Accueil"
         className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
         <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full mf:mt-100">
               <h2 className="text-4xl sm:text-7xl front-bold text-white">
                  🚀 Bienvenue sur mon site de prestations ! 🌐
               </h2>
               <p className="text-gray-500 py-4 max-w-md">
                  {" "}
                  Salut, je suis <b>Ahmed</b>, passionné par la technologie et
                  la créativité. Je suis <b>développeur web freelance</b> et
                  étudiant en ingénierie de la <b>cybersécurité</b>. Avec des
                  compétences en React, Vue.js, Laravel et WordPress et
                  d&apos;autres encore, je crée des{" "}
                  <b>sites web modernes et uniques </b> qui répondent à vos
                  besoins. Explorez mes services sur mon site et contactez-moi
                  via la page de contact.
               </p>

               <div>
                  <Link
                     to="Portfolio"
                     smooth
                     duration={500}
                     className=" group text-white w-fit px-7 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                  >
                     Portfolio &nbsp;
                     <span className="group-hover:rotate-90 duration-300">
                        <RxDoubleArrowRight size={20} className="ml-1" />
                     </span>
                  </Link>
               </div>
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default Accueil;
