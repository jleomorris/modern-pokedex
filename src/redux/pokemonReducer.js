import axios from 'axios';
import { individualPokemonUrl } from '../services/pokeapi';

const initialState = {
  generation1: [],
};

// Reducer

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GEN1':
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

// export const loadGen1Data = () => async (dispatch) => {
//   // Fetch axios
//   const gen1PokemonData = await axios.get(firstGenPokemonUrl());

//   dispatch({
//     type: 'FETCH_GEN1',
//     payload: {
//       generation1: gen1PokemonData.data.pokemon_species,
//     },
//   });
// };

export const loadGen1Data = () => async (dispatch) => {
  const allGen1 = [];

  for (let i = 1; i < 152; i += 1) {
    const pokemonData = await axios.get(individualPokemonUrl(i));
    allGen1.push(pokemonData.data);
  }

  await Promise.all(allGen1).then(() => {
    console.log('allgen1', allGen1);

    dispatch({
      type: 'FETCH_GEN1',
      payload: {
        generation1: allGen1,
      },
    });
  });
};

export default pokemonReducer;
