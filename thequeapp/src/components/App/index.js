import React from 'react';
import './styles.css';

const App = () => {
  return (
    <div className="application">
		<h1>La Bibliothèque d'applications.</h1>
		<section>
			<h2>Présentation des différentes applications :</h2>
			<ul>
				<li>La calculatrice, simple, classique, pour calculer en toute tranquilité.</li>
				<li>Github API, le moyen de parler à une API externe pour utiliser les données.</li>
				<li>La gallerie inifinie, pour scroll à l'infini, salut Instagram :x</li>
			</ul>
		</section>
    </div>
  );
}

export default App;
