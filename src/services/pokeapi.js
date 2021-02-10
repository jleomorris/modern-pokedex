// Base URL
const baseUrl = 'https://pokeapi.co/api/v2/';

// API endpoints

// All generation 1 pokemon
const firstGenPokemon = `generation/1/`;
const individualPokemon = 'pokemon/';

// Formed URLs combining base url and endpoint

export const firstGenPokemonUrl = () => `${baseUrl}${firstGenPokemon}`;
// pokeapi.co/api/v2/pokemon/${i}/
export const individualPokemonUrl = (id) =>
  `${baseUrl}${individualPokemon}${id}/`;
