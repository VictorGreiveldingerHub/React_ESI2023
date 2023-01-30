import React from 'react';
import './styles.css';

const InfinityScroll = ({ scroll }) => {

  // const allPokemons = scroll.map(e =>  {
  //   return (
  //     <li className="pokemon" key={e.url}>
  //       <h4 className="poke-title">{e.name}</h4>
  //       <p>{e.url}</p>
  //     </li>
  //   );
  // });
    
  return (
      <div className="infinity-scroll" id="infinity">
        <h2>Gallery infinie</h2>
        <ul>
          {/* {allPokemons} */}
        </ul>
      </div>
  );
};

export default InfinityScroll;