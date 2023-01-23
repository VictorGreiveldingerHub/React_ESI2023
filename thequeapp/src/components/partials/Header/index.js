import React from 'react';
import './styles.css';

const Header = () => {
	return (
		<div className="header">
			<nav>
				<ul>
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
		</div>
	);
};

export default Header;