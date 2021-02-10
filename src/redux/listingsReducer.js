import listingsService from '../services/listingsService';

const listingsReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_LISTINGS':
      return action.data;
    case 'ADD_LISTING':
      return [...state, action.data];
    case 'DELETE_LISTING':
      return state.filter((listing) => listing.name !== action.data);
    default:
      return state;
  }
};

// Deprecated

// export const initListings = () => {
//   return async (dispatch) => {
//     const listings = await listingsService.getAll();
//     dispatch({
//       type: 'INIT_LISTINGS',
//       data: listings,
//     });
//   };
// };

export const initListings = () => async (dispatch) => {
  const listings = await listingsService.getAll();

  dispatch({
    type: 'INIT_LISTINGS',
    data: listings,
  });
};

export const addListing = (name, age) => {
  return async (dispatch) => {
    const listing = await listingsService.addListing(name, age);
    dispatch({
      type: 'ADD_LISTING',
      data: listing,
    });
  };
};

export const deleteListing = (listingName) => {
  return async (dispatch) => {
    // Here is where you would call the service
    // to delete from the database
    dispatch({
      type: 'DELETE_LISTING',
      data: listingName,
    });
  };
};

export default listingsReducer;
