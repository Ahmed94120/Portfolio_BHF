const contact = () => {
   return (
      <div
         name="Contact"
         className="bg-gradient-to-b from-black to-gray-500 w-full h-screen"
      >
         <div className="mx-auto">
            <div>
               <p>Contact</p>
               <p>Remplissez le formulaire suivant afin de prendre contact</p>
            </div>
            <div>
               <form action="">
                  <input
                     type="text"
                     name="Nom - Prénom"
                     placeholder="Entrez votre nom et prénom"
                     className="p-2 bg-transparent border-2 rounded-md text-white focus: outline-none"
                  />
                  <input
                     type="text"
                     name="Email"
                     placeholder="Entrez votre adresse mail"
                     className="p-2 bg-transparent border-2 rounded-md text-white focus: outline-none"
                  />
                  <textarea
                     name="Message"
                     placeholder="Écrivez votre message ici"
                     rows={10}
                     className="p-2 bg-transparent border-2 rounded-md text-white focus: outline-none"
                  ></textarea>
                  <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                     Envoyer
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default contact;
