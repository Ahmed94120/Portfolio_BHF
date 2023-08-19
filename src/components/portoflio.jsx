import travaux from "../assets/portfolio/travaux.png";

const portoflio = () => {
   const portfolios = [
      {
         id: 1,
         src: travaux,
      },
      {
         id: 2,
         src: travaux,
      },
      {
         id: 3,
         src: travaux,
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
   return (
      <div
         name="Portfolio"
         className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
      >
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
               <p className="text-4xl front-bold inline border-b-4 border-gray-500">
                  Portfolio
               </p>
               <p className="py-6">
                  Consultez quelques projets que j&apos;ai pu faire
               </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
               {portfolios.map(({ id, src }) => (
                  <div
                     key={id}
                     className="shadow-md shadow-gray-600 rounded-lg"
                  >
                     <img
                        src={src}
                        alt=""
                        className="rounded-md duration-200 hover:scale-105 w-1/2 mx-auto"
                     />
                     <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-6 m-4 duration-200 hover:scale-105">
                           Visiter
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default portoflio;
