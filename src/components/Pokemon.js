import React, { useEffect, useState } from 'react';
// Styled components
import styled from 'styled-components';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGen1Data } from '../redux/pokemonReducer';
// Images
import bulbasaurDefault from '../bulbasaur_default.png';

const Pokemon = () => {
  // Redux
  const dispatch = useDispatch();
  const gen1Pokemon = useSelector((state) => state.pokemon.generation1);
  // State
  const [isDefaultSelected, setIsDefaultSelected] = useState(true);
  const [isOfficialSelected, setIsOfficalSelected] = useState(false);
  const [isDreamWorldSelected, setIsDreamWorldSelected] = useState(false);
  const [spriteIndex, setSpriteIndex] = useState(0);

  useEffect(() => {
    dispatch(loadGen1Data());
    console.log(gen1Pokemon);
  }, [dispatch]);

  //   useEffect(() => {
  //     debugger;
  //   }, [gen1Pokemon]);

  const spriteSelectionHandler = () => {
    if (spriteIndex === 0) {
      setIsDreamWorldSelected(true);
      setIsOfficalSelected(false);
      setIsDefaultSelected(false);
    } else if (spriteIndex === 1) {
      setIsDreamWorldSelected(false);
      setIsOfficalSelected(true);
      setIsDefaultSelected(false);
    } else {
      setIsDreamWorldSelected(false);
      setIsOfficalSelected(false);
      setIsDefaultSelected(true);
    }

    if (spriteIndex === 2) setSpriteIndex(0);
    if (spriteIndex !== 2) setSpriteIndex((prev) => prev + 1);
  };
  return (
    <StyledPokemon>
      <div className="custom-buttons">
        <div className="custom-button-container">
          {spriteIndex === 0 && (
            <img
              //   src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              src={bulbasaurDefault}
              alt="sprite"
            />
          )}
          {spriteIndex === 1 && (
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt="sprite"
            />
          )}
          {spriteIndex === 2 && (
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
              alt="sprite"
            />
          )}
          <button type="button" onClick={spriteSelectionHandler}>
            {spriteIndex === 0 && 'Default'}
            {spriteIndex === 1 && 'Dream World'}
            {spriteIndex === 2 && 'Official'}
          </button>
        </div>
      </div>
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
  .custom-buttons {
    border: 2px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0rem;

    .custom-button-container {
      border: 1px solid blue;
      position: relative;

      img {
        position: absolute;
        top: -50px;
        height: 100px;
        left: -60px;
      }

      button {
        padding: 1rem 2rem;
        border-radius: 2rem;
        border: none;
        margin: 1rem;
        outline: none;
        font-family: 'Bebas Neue', cursive;
        font-size: 2rem;
        letter-spacing: 0.25rem;
      }
    }
  }

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
