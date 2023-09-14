const contact = () => {
   return (
      <div
         name="Contact"
         className="bg-gradient-to-b from-black to-gray-500 w-full text-white py-12"
      >
         <div className="mx-auto flex flex-col p-4 justify-center max-w-screen-lg h-full">
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                  Contact
               </p>
               <p className="py-6">
                  Remplissez le formulaire suivant afin de prendre contact
               </p>
            </div>
            <div className="flex justify-center items-center">
               <form
                  action="https://getform.io/f/f8c66576-dc3b-4ee0-80ae-aa97639d4167"
                  method="POST"
                  className="flex flex-col gap-6 w-full md:w-1/2"
               >
                  <input
                     type="text"
                     name="NomPrenom"
                     placeholder="Entrez votre nom et prénom"
                     required="Nom et prénom requis"
                     className="p-2 bg-transparent border-2 rounded-md text-white focus: outline-none"
                  />

                  <input
                     type="text"
                     name="Email"
                     placeholder="Entrez votre adresse mail"
                     required="Adresse mail requise"
                     className="p-2 bg-transparent border-2 rounded-md text-white focus: outline-none"
                  />

                  <textarea
                     name="Message"
                     required="Message requis"
                     placeholder="Écrivez votre message ici"
                     rows={10}
                     className="p-2 bg-transparent border-2 rounded-md text-white focus: outline-none"
                  ></textarea>

                  <button
                     type="submit"
                     className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                  >
                     Envoyer
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default contact;
