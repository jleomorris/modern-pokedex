import axios from 'axios';
import { pokemonDetailsUrl, pokemonDetailsUrl2 } from '../services/pokeapi';

const initialState = {
  pokemonData: '',
  pokemonLoaded: 0,
};

// Reducer
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GEN1':
      return {
        ...state,
        pokemonData: [...state.pokemonData, action.payload.pokemonData],
      };
    case 'LOAD_POKEMON':
      return {
        ...state,
        pokemonLoaded: action.payload.numberLoaded,
      };
    default:
      return { ...state };
  }
};

// Actions
export const loadGen1Data = () => async (dispatch) => {
  const allPokemonData = [];
  const allPokemonData2 = [];

  for (let i = 1; i < 152; i += 1) {
    // Skip iterations for pokemon that the api is having issues with
    // if (i === 13 || i === 20 || i === 74 || i === 76) {
    //   continue;
    // }
    const pokemonData = await axios.get(pokemonDetailsUrl(i));
    const pokemonData2 = await axios.get(pokemonDetailsUrl2(i));
    // allPokemonData.push(pokemonData.data);
    // allPokemonData2.push(pokemonData2.data);

    console.log('pokemonReducer.pokemonData', pokemonData.data);
    console.log('pokemonReducer.pokemonData2', pokemonData2.data);

    const mergedData = { ...pokemonData.data, ...pokemonData2.data };

    console.log('pokemonReducer.mergedData', mergedData);

    dispatch({
      type: 'LOAD_POKEMON',
      payload: {
        numberLoaded: allPokemonData2.length + allPokemonData.length,
      },
    });

    dispatch({
      type: 'FETCH_GEN1',
      payload: {
        pokemonData: mergedData,
      },
    });
  }

  //   await Promise.all(allPokemonData).then(() => {
  //     // Merge both requested sets of pokemon data into one
  //     const mergedData = allPokemonData.map((pokemon, i) => ({
  //       ...pokemon,
  //       ...allPokemonData2[i],
  //     }));

  //     console.log('mergedData', mergedData);
  //     console.log(mergedData[0]);

  //     dispatch({
  //       type: 'FETCH_GEN1',
  //       payload: {
  //         pokemonData: mergedData,
  //       },
  //     });
  //   });
};

export default pokemonReducer;
