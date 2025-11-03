import ReactDOM from "react-dom/client";
//react-dom/client contient la fonction createRoot
//et donc la 2ème ligne permet de monter le composant React (<App />)
//dans la page html à l'intérieur de la balise <div id="root">
// -- >> monte l'app React dans la page HTML
import { createBrowserRouter, RouterProvider } from "react-router";
//importe les outils de navigation de react-router,
// crée un ensemble de routes ou table de correspondance
// entre une URL et un composant.
// -- >> gère la nav entre les pages
import App from "./App";

// page components

import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
// -- >> importe les composants des différentes pages
// router creation

const router = createBrowserRouter([
//création du router qui contiendra les correspondances entre les URLs et les composants React
//le résultat est stocké dans la variable router, qui sera fourni à l'app via
//<RouterProvider router={router} /> à la fin du code
  {
    element: <App />,
    children: [
//déclare une route parent à partir de laquelle les routes enfants seront affichées
//element: <App /> signifie que App, qui contient souvent la navbar, le footer, etc... sera toujours présent
//children [...] liste les routes enfants, les pages qui s'afficheront à l'intérieur de <App
      {
        path: "/",
        element: <Home />,
      },
//1ère route enfant
      {
        path: "/about",
        element: <About />,
      },
//2ème route enfant
      {
        path: "/articles/:id",
        element: <Article />,
      },
//3ème route enfant qui est dynamique grâce à :id
//:id est un paramètre d'URL (ex : /articles/5)
//sa valeur sera récupérée dans le component Article grâce au hook :
//import { useParams } from "react-router";
//function Article() {
//const { id } = useParams(); // récupère la valeur de :id
//return <h1>Article n°{id}</h1>;
}
    ],
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
