// Base URL
const baseUrl = 'https://pokeapi.co/api/v2/';

// API endpoints
const generationDetails = `generation/`;
const pokemonDetails = 'pokemon/';
const pokemonDetails2 = 'pokemon-species/';
const typeDetails = 'type/';

// Formed URLs combining base url and endpoint
export const generationDetailsUrl = () => `${baseUrl}${generationDetails}`;
export const pokemonDetailsUrl = (id) => `${baseUrl}${pokemonDetails}${id}`;
export const pokemonDetailsUrl2 = (id) => `${baseUrl}${pokemonDetails2}${id}`;
export const typeDetailsUrl = (id) => `${baseUrl}${typeDetails}${id}`;
