import React from 'react';

import './styles.css';

const Header = ( {theme}) => {
	return (
		<nav>
			<ul className="navigation">
				<li>
					<a href="#top">Top</a>
				</li>
				<li>
					<a href='#calculatrice'>Calculatrice</a>
				</li>
				<li>
				<a href='#gradient'>Gradient de couleur</a>
				</li>
				<li>
				<a href='#infinity'>Scroll Infinie</a>
				</li>
			  <button onClick={theme}>Dark Mode</button>
			</ul>
		</nav>
	);
};

export default Header;