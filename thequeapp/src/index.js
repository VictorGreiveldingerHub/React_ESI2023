// == Import : npm
import React from 'react'; // couche 1
// import { render } from 'react-dom'; // couche 2
import { createRoot } from 'react-dom/client';


//    Import components.
import App from './components/App';

// Fichiers additionnels
import './reset.css';
import './styles.css';


// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const container = document.getElementById('root');

const root = createRoot(container);

root.render(rootReactElement);