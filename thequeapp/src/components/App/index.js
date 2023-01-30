import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import './styles.css';

// == Import : local
import Header from '../partials/Header';
// import Page404 from './page_404';

import Calculatrice from '../Calculatrice';
// import InfinityScroll from '../InfinityScroll';
import Gradient from '../Gradient';


const App = () => {
	// const [scrollInfiny, setScrollInfiny] = useState([]);
	const [theme, setTheme] = useState("light");
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");
	
	// // Pour le scroll infini
	// let offset = 0;
	// // Pour la calculatrice
	const opes = ["/", "*", "+", "-", "."];
	
	
	// Dark Mode
	const changeTheme = () => {	
		if(theme === "light"){
			setTheme("dark");
		}	else {
			setTheme("light")
		}
	};
	
	// Calculatrice
	const updateCalc = (value) => {
		
		if((opes.includes(value) && calc === "") || (opes.includes(value) && opes.includes(calc.filter(-1)))){
			return;
		}
		setCalc(calc + value);
		
		if(!opes.includes(value)){
			// eslint-disable-next-line no-eval
			setResult(eval(calc + value).toString());
		}
	};
	
	const calculate = () => {
		setCalc(eval(calc).toString());
	}
	
	const deleteLast = () => {
		if (calc == ''){
			return;
		};
		
		const value = calc.slice(0, -1);
		setCalc(value);
	}
	
	// const loadMorePokemons = () => {
	// 	axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}limit=20`)
	// 		.then(res => {
	// 			const pokemons = [];
	// 			res.data.results.forEach(e => {
	// 				pokemons.push(e);
	// 				setScrollInfiny(pokeList => [...pokeList, ...pokemons]);
	// 			});
	// 		})
	// 		.catch(error => {
	// 			console.log(error);
	// 		});
	// 	offset += 20;
	// };
	
	// const handleScroll = (e) => {
	// 	if(window.innerHeight + e.target.documentElement.scrollTop >= e.target.documentElement.scrollHeight){
	// 		loadMorePokemons();
	// 	};
	// };
	
	useEffect(() => {
		// loadMorePokemons();
		// window.addEventListener("scroll", handleScroll);
	});
  
  return (
    <div className={`application-${theme}`}>
			<Header theme={changeTheme} />
			<h1 id="top">La Bibliothèque d'applications.</h1>
			<section>
				<h2>Présentation des différentes applications :</h2>
				<ul>
					<li>La calculatrice,</li>
					<li>La gallerie inifinie,</li>
					<li>Gradient de couleur</li>
				</ul>
			</section>
			<Calculatrice 
				updateCalc={updateCalc}
				calc={calc}
				result={result}
				calculate={calculate}
				deleteLast={deleteLast}
			/>
			<Gradient />
			{/* <InfinityScroll scroll={scrollInfiny} /> */}
    </div>
  );
}

export default App;