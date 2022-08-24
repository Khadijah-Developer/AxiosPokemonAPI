import axios from 'axios';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [pokemons, setPokemon] = useState({
      results : []
    });

 // fetch pokemons from API via  Axios
  const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(response => { setPokemon(response.data) })// resolve response and setPeople as response.results
    }

  return (
       <div className="container d-flex align-items-center flex-column">
      <button className="btn btn-outline-info m-3 " onClick={getPokemon}>Fetch Pokemon</button>
       <h4 className="">Pokémon</h4>
     
        {pokemons.results && pokemons.results.map((pokemon, url) => { 
          return (
             <ul className='list-group' key={pokemon.url}> 
              <li className="list-group-items list-group-item-action m-1"> {pokemon.name} - { pokemon.url}</li>
            </ul>
            
          )
        })}
    
    </div>
  );
}

export default App;
