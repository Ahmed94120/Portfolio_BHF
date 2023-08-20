import NavBar from "./components/NavBar";
import Accueil from "./components/Accueil";
import SocialLinks from "./components/SocialLinks";
import About from "./components/about";
import Portoflio from "./components/portoflio";
import Experience from "./components/Experience";
import Contact from "./components/contact";
function App() {
   return (
      <div>
         <NavBar />
         <div className="flex-col flex">
            <Accueil />
            <SocialLinks />
            <About />
            <Portoflio />
            <Experience />
            <Contact />
         </div>
      </div>
   );
}

export default App;
