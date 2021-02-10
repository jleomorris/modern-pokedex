import React, { useEffect, useState } from 'react';
// Styled components
import styled from 'styled-components';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGen1Data } from '../redux/pokemonReducer';

const Pokemon = () => {
  const dispatch = useDispatch();
  const gen1Pokemon = useSelector((state) => state.pokemon.generation1);
  const [isDreamWorldSelected, setIsDreamWorldSelected] = useState(false);
  const [isOfficialSelected, setIsOfficalSelected] = useState(false);
  const [isDefaultSelected, setIsDefaultSelected] = useState(true);

  useEffect(() => {
    dispatch(loadGen1Data());
    console.log(gen1Pokemon);
  }, [dispatch]);

  //   useEffect(() => {
  //     debugger;
  //   }, [gen1Pokemon]);

  const spriteSelectionHandler = (type) => {
    if (type === 'dream world') {
      setIsDreamWorldSelected(true);
      setIsOfficalSelected(false);
      setIsDefaultSelected(false);
    } else if (type === 'official') {
      setIsDreamWorldSelected(false);
      setIsOfficalSelected(true);
      setIsDefaultSelected(false);
    } else if (type === 'default') {
      setIsDreamWorldSelected(false);
      setIsOfficalSelected(false);
      setIsDefaultSelected(true);
    }
  };
  return (
    <StyledPokemon>
      <button
        type="button"
        onClick={() => spriteSelectionHandler('dream world')}
      >
        Toggle Dream World Sprite
      </button>
      <button type="button" onClick={() => spriteSelectionHandler('official')}>
        Toggle Official Sprite
      </button>
      <button type="button" onClick={() => spriteSelectionHandler('default')}>
        Default
      </button>
      <div className="pokemon-card-container">
        {gen1Pokemon &&
          gen1Pokemon.map((pokemon) => (
            <div key={pokemon.name} className="pokemon-card">
              <h2 className="pokemon-card-title">{pokemon.name}</h2>
              {isDreamWorldSelected && (
                <img
                  className="pokemon-card-image-dream-world"
                  src={pokemon.sprites.other.dream_world.front_default}
                  //   src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg"
                  alt={pokemon.name}
                />
              )}
              {isOfficialSelected && (
                <img
                  className="pokemon-card-image-official"
                  src={Object.values(pokemon.sprites.other)[1].front_default}
                  //   src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg"
                  alt={pokemon.name}
                />
              )}
              {isDefaultSelected && (
                <img
                  className="pokemon-card-image-official"
                  src={pokemon.sprites.front_default}
                  //   src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg"
                  alt={pokemon.name}
                />
              )}
            </div>
          ))}
      </div>
    </StyledPokemon>
  );
};

// Components

// Styled components
const StyledPokemon = styled.div`
  .pokemon-card-container {
    border: 2px solid red;
    display: grid;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    margin: 4rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
    .pokemon-card {
      margin: 1rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      background: #d7d7d7;
      border-radius: 1rem;

      .pokemon-card-title {
        text-align: center;
        margin-bottom: 1rem;
      }

      .pokemon-card-image-dream-world,
      .pokemon-card-image-official {
        height: 100px;
        width: 100px;
      }
    }
  }
`;

export default Pokemon;
