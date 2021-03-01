import axios from 'axios';
import { typeDetailsUrl } from '../services/pokeapi';

const initialState = {
  typeData: [],
};

// Reducer
const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return {
        ...state,
        typeData: action.payload.typeData,
      };
    default:
      return { ...state };
  }
};

// Actions
export const loadAllTypeData = () => async (dispatch) => {
  const allTypeData = [];

  for (let i = 1; i < 19; i += 1) {
    const typeData = await axios.get(typeDetailsUrl(i));
    allTypeData.push(typeData.data);
  }

  await Promise.all(allTypeData).then(() => {
    console.log('allTypeData', allTypeData);

    dispatch({
      type: 'FETCH_ALL',
      payload: {
        typeData: allTypeData,
      },
    });
  });
};

export default typeReducer;
