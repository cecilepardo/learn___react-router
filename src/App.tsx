// VERSION 1 DE L'EXERCICE AVANT FACTORISATION
// import { useState } from "react";
// import "./App.css";

// import Home from "./pages/Home";
// import About from "./pages/About";

// // the App

// function App() {
//   //composant fonctionnel React nommé App
//   const [currentLocation, setCurrentLocation] = useState("/");
//   //déclaration d'un state (état local) avec le hook useState
//   //currentLocation : état actuel
//   //setCurrentLocation : fonction permettant de changer cette valeur
//   //useState("/") : initialise currentLocation à "/" donc la Home
//   return (
//   //le composant renvoie du JSX donc structure HTML / React à afficher
//     <>
//       <nav>
//         <button onClick={() => setCurrentLocation("/")} type="button">
//           Home
//         </button>
//         <button onClick={() => setCurrentLocation("/about")} type="button">
//           About
//         </button>
//       </nav>
//       <main>
//         {currentLocation === "/" && <Home />}
//   {/* Si currentLocation est égal à "/", alors React affiche le composant <Home />.
// Sinon, rien n’est affiché. */}
//         {currentLocation === "/about" && <About />}
//   {/* Si currentLocation est "/about", alors on affiche le composant <About />. */}
//       </main>
//     </>
//   );
// }

// export default App;

// VERSION 2 DE L'EXERCICE

import { createBrowserRouter, Link, Outlet } from "react-router";
//Link sert à créer des liens interne dans l'app React
//contrairement au balises <a> il ne recharge pas toute la page
//Il met à jour l'URL et change le composant affiché grâce à React Router
import "./App.css";

function App() {
  return (
    <>
{/* fragment React qui permet de regrouper plusieurs éléments sans ajouter de <div> inutile dans le DOM.
Tout ce qui est entre <> et </> sera renvoyé par le component. */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <Outlet />

      </main>
    </>
  );
}
// Emplacement où s'affiche le composant de la route enfant courante.
// Il est défini dans App parce que App est la route parent dans createBrowserRouter
// Le contenu est inséré automatiquement selon la valeur du path de la route active. 
export default App;
