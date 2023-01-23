// == Import : npm
import React from 'react'; // couche 1
import { render } from 'react-dom'; // couche 2
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './components/App';
// == Import : local
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Page404 from './page_404';

//    Import components.

import Calculatrice from './components/Calculatrice';
import InfinityScroll from './components/InfinityScroll';
import GithubAPI from './components/GithubAPI';

// Fichiers additionnels
import './styles.css'

// == Render
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <App />
        <Footer />
      </>
    ),
    errorElement: <Page404 />
  },
  {
    path: "/calculatrice",
    element: (
      <>
        <Header />
        <Calculatrice />
        <Footer />
      </>
    ),
    errorElement: <Page404 />
  },
  {
    path: "/githubapi",
    element: (
      <>
        <Header />
        <GithubAPI />
        <Footer />
      </>
    ),
    errorElement: <Page404 />
  },
  {
    path: "/infinityscroll",
    element: (
      <>
        <Header />
        <InfinityScroll />
        <Footer />
      </>
    ),
    errorElement: <Page404 />
  },
]);

// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);