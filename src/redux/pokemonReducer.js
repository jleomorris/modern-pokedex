import axios from 'axios';
import { pokemonDetailsUrl, pokemonDetailsUrl2 } from '../services/pokeapi';

const initialState = {
  pokemonData: [],
};

// Reducer
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GEN1':
      return {
        ...state,
        pokemonData: action.payload.pokemonData,
      };
    default:
      return { ...state };
  }
};

// Actions
export const loadGen1Data = () => async (dispatch) => {
  const allPokemonData = [];
  const allPokemonData2 = [];

  for (let i = 1; i < 15; i += 1) {
    // Skip iterations for pokemon that the api is having issues with
    // if (i === 13 || i === 20 || i === 74 || i === 76) {
    //   continue;
    // }
    const pokemonData = await axios.get(pokemonDetailsUrl(i));
    const pokemonData2 = await axios.get(pokemonDetailsUrl2(i));
    allPokemonData.push(pokemonData.data);
    allPokemonData2.push(pokemonData2.data);
  }

  await Promise.all(allPokemonData).then(() => {
    // Merge both requested sets of pokemon data into one
    const mergedData = allPokemonData.map((pokemon, i) => ({
      ...pokemon,
      ...allPokemonData2[i],
    }));

    console.log('mergedData', mergedData);

    dispatch({
      type: 'FETCH_GEN1',
      payload: {
        pokemonData: mergedData,
      },
    });
  });
};

export default pokemonReducer;
