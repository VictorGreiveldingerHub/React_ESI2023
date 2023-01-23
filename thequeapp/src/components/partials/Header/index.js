import React from 'react';
import './styles.css';

const Header = () => {
	return (
		<nav>
			<ul className="navigation">
				<li>
					<a href={`/`}>Accueil</a>
				</li>
				<li>
					<a href={`/calculatrice`}>Calculatrice</a>
				</li>
				<li>
					<a href={`/githubapi`}>Github API</a>
				</li>
				<li>
					<a href={`/infinityscroll`}>Infiny Scroll</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;