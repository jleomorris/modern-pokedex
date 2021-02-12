import axios from 'axios';
import { pokemonDetailsUrl, pokemonDetailsUrl2 } from '../services/pokeapi';

const initialState = {
  pokemonData: [],
  pokemonData2: [],
};

// Reducer
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GEN1':
      return {
        ...state,
        pokemonData: action.payload.pokemonData,
        pokemonData2: action.payload.pokemonData2,
      };
    default:
      return { ...state };
  }
};

// Actions
export const loadGen1Data = () => async (dispatch) => {
  const allPokemonData = [];
  const allPokemonData2 = [];

  for (let i = 1; i < 10; i += 1) {
    const pokemonData = await axios.get(pokemonDetailsUrl(i));
    const pokemonData2 = await axios.get(pokemonDetailsUrl2(i));
    allPokemonData.push(pokemonData.data);
    allPokemonData2.push(pokemonData2.data);
  }

  await Promise.all(allPokemonData).then(() => {
    console.log('allPokemonData', allPokemonData);

    dispatch({
      type: 'FETCH_GEN1',
      payload: {
        pokemonData: allPokemonData,
        pokemonData2: allPokemonData2,
      },
    });
  });
};

export default pokemonReducer;
