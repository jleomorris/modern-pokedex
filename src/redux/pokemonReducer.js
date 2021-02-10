import axios from 'axios';
import { firstGenPokemonUrl } from '../services/pokeapi';

const initialState = {
  generation1: [],
};

// Reducer

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON':
      return {
        ...state,
        generation1: action.payload.generation1,
      };
    // case 'ADD_LISTING':
    //   return [...state, action.data];
    // case 'DELETE_LISTING':
    //   return state.filter((listing) => listing.name !== action.data);
    default:
      return { ...state };
  }
};

// Actions

export const loadGen1Data = () => async (dispatch) => {
  // Fetch axios
  const gen1PokemonData = await axios.get(firstGenPokemonUrl());

  dispatch({
    type: 'FETCH_POKEMON',
    payload: {
      generation1: gen1PokemonData.data.pokemon_species,
    },
  });
};

export default pokemonReducer;
