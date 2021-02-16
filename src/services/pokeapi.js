// Base URL
const baseUrl = 'https://pokeapi.co/api/v2/';

// API endpoints
const generationDetails = `generation/`;
const pokemonDetails = 'pokemon/';
const pokemonDetails2 = 'pokemon-species/';

// Formed URLs combining base url and endpoint
export const generationDetailsUrl = () => `${baseUrl}${generationDetails}`;
export const pokemonDetailsUrl = (id) => `${baseUrl}${pokemonDetails}${id}`;
export const pokemonDetailsUrl2 = (id) => `${baseUrl}${pokemonDetails2}${id}`;
