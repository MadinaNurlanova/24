// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';
// import Gallery from './Gallery';

// const App = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchPokemonData = async () => {
//       try {
//         const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=');
//         const pokemonResults = response.data.results;

//         const pokemonDataPromises = pokemonResults.map(async (pokemon) => {
//           const pokemonDetails = await axios.get(pokemon.url);
//           return {
//             name: pokemon.name,
//             imageUrl: pokemonDetails.data.sprites.front_default,
//           };
//         });

//         const pokemonData = await Promise.all(pokemonDataPromises);
//         setItems(pokemonData);
//       } catch (error) {
//         console.error('Error fetching Pokémon data:', error);
//       }
//     };

//     fetchPokemonData();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Pokemon Gallery</h1>
//       <Gallery items={items} />
//     </div>
//   );
// };

// export default App;
