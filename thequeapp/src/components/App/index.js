import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './styles.css';

// == Import : local
import Header from '../partials/Header';
// import Page404 from './page_404';

import Calculatrice from '../Calculatrice';
import InfinityScroll from '../InfinityScroll';
import GithubAPI from '../GithubAPI';


const App = () => {
	let offset = 0;
	
	const [scrollInfiny, setScrollInfiny] = useState([]);
	  
	const loadMorePokemons = () => {
		axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
			.then(res => {
				const pokemons = [];
				res.data.results.forEach(e => {
					pokemons.push(e);
					setScrollInfiny((oldPokemons) => [...oldPokemons, ...pokemons]);
				});
			})
			.catch(error => {
				console.log(error);
			});
		offset += 10;
	};
	
	const handleScroll = (e) => {
		if(window.innerHeight + e.target.documentElement.scrollTop >= e.target.documentElement.scrollHeight){
			loadMorePokemons();
		}
	}
	
	useEffect(() => {
		loadMorePokemons();
		window.addEventListener("scroll", handleScroll);
	}, [])
    
  return (
    <div className="application">
			<Header/>
			<h1>La Bibliothèque d'applications.</h1>
			<section>
				<h2>Présentation des différentes applications :</h2>
				<ul>
					<li>La calculatrice, simple, classique, pour calculer en toute tranquilité.</li>
					<li>Github API, le moyen de parler à une API externe pour utiliser les données.</li>
					<li>La gallerie inifinie, pour scroll à l'infini, salut Instagram :x</li>
				</ul>
			</section>
			<Calculatrice/>
			<GithubAPI/>
			<InfinityScroll scroll={scrollInfiny}/>
    </div>
  );
}

export default App;