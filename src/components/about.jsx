const about = () => {
   return (
      <div
         name="about"
         className="w-full  bg-gradient-to-b from-gray-800 to-black text-white py-12"
      >
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                  {" "}
                  À propos
               </p>
            </div>
            <p className="text-xl mt-20 ">
               Salut, je suis Ahmed, un développeur web passionné et un étudiant
               en ingénierie de la cybersécurité. Mon parcours associe
               habilement la technologie du développement à l&apos;importance
               cruciale de la sécurité en ligne. Avec des compétences pointues
               en React, Vue.js, Laravel et WordPress, je crée des sites web
               modernes et fonctionnels qui allient esthétique et sécurité. Mon
               objectif est d&apos;harmoniser le côté visuel avec la protection
               numérique pour offrir des solutions web complètes et innovantes.
            </p>
            <br />
            <p className="text-xl">
               Je suis animé par la passion de donner de la visibilité aux
               entreprises, en leur offrant des plateformes en ligne qui
               reflètent leur identité unique. Mon expertise couvre également la
               réalisation de plans de drone et de photographies à couper le
               souffle pour donner une nouvelle perspective à leurs projets.
            </p>
            <br />
            <p className="text-xl">
               En tant que consultant en cybersécurité, je m&apos;engage à
               sécuriser vos données précieuses, tout en élevant vos projets
               numériques à un niveau supérieur. Explorez mon portfolio pour
               voir mes réalisations et n&apos;hésitez pas à me contacter pour
               discuter de la manière dont je peux concrétiser vos objectifs en
               ligne.
            </p>
         </div>
      </div>
   );
};

export default about;
