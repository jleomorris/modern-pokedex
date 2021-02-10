import React, { useEffect } from 'react';
// Styled components
import styled from 'styled-components';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGen1Data } from '../redux/pokemonReducer';

const Pokemon = () => {
  const dispatch = useDispatch();
  const gen1Pokemon = useSelector((state) => state.pokemon.generation1);

  useEffect(() => {
    dispatch(loadGen1Data());
    console.log(gen1Pokemon);
  }, [dispatch]);

  //   useEffect(() => {
  //     debugger;
  //   }, [gen1Pokemon]);

  return (
    <StyledPokemon className="pokemon-cards-container">
      {gen1Pokemon &&
        gen1Pokemon.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-card">
            <h2 className="pokemon-card-title">{pokemon.name}</h2>
            <img
              className="pokemon-card-image-dream-world"
              src={pokemon.sprites.other.dream_world.front_default}
              //   src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg"
              alt={pokemon.name}
            />
            <img
              className="pokemon-card-image-official"
              src={Object.values(pokemon.sprites.other)[1].front_default}
              //   src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg"
              alt={pokemon.name}
            />
          </div>
        ))}
    </StyledPokemon>
  );
};

// Components

// Styled components
const StyledPokemon = styled.div`
  width: 80%;
  border: 2px solid red;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .pokemon-card {
    margin: 1rem;

    .pokemon-card-title {
      text-align: center;
    }

    .pokemon-card-image-dream-world,
    .pokemon-card-image-official {
      height: 100px;
      width: 100px;
    }
  }
`;

export default Pokemon;
