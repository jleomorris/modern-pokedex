import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import pokemonReducer from './pokemonReducer';
import typeReducer from './typeReducer';

const reducer = combineReducers({
  pokemon: pokemonReducer,
  types: typeReducer,
});

// Combine thunk and dev tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
