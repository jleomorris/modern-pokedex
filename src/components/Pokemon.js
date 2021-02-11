import React, { useEffect, useState } from 'react';
// Styled components
import styled from 'styled-components';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGen1Data } from '../redux/pokemonReducer';
// Images
import bulbasaurDefault from '../img/bulbasaur_default.png';
// Util
import { convertToTypeImage, convertToTypeBackground } from '../util';

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
            <p>Sprite Type</p>
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
              <div className="background-circle"></div>
              <div className="background-image-container">
                {/* <p>{pokemon.types[0].type.name}</p> */}
              </div>
              {/* {convertToTypeBackground(
                pokemon.types[1].type.name === undefined
                  ? pokemon.types[0].type.name
                  : pokemon.types[1].type.name
              )} */}
              {convertToTypeBackground(pokemon.types[0].type.name)}
              <p className="attack">{pokemon.stats[1].base_stat}</p>
              <div className="type-container">
                {pokemon.types.map((type) => (
                  // <p>{type.type.name}</p>
                  <>{convertToTypeImage(type.type.name)}</>
                ))}
              </div>
              <div className="name-health-container">
                <h2 className="pokemon-card-title">{pokemon.name}</h2>
                <p className="hp">{pokemon.stats[0].base_stat} HP</p>
              </div>
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
                  className="pokemon-card-image-default"
                  src={pokemon.sprites.front_default}
                  //   src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg"
                  alt={pokemon.name}
                />
              )}
              <p className="id">#{pokemon.id}</p>
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
        cursor: pointer;
        transition: all 5s ease;

        p {
          font-size: 1.5rem;
        }
      }
    }
  }

  .pokemon-card-container {
    border: 2px solid red;
    display: grid;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    margin: 4rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;

    .pokemon-card {
      height: 300px;
      margin: 1rem;
      display: flex;
      justify-content: start;
      flex-direction: column;
      align-items: center;
      border-radius: 1rem;
      position: relative;
      box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);

      .background-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 150px;
        width: 150px;
        background: #ffffffa3;
        border-radius: 50%;
        z-index: -1;
      }

      .background-image-container {
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -2;
      }

      .background-image {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 1rem;
        z-index: -2;
      }

      .attack {
        position: absolute;
        top: -25px;
        left: -5px;
        font-size: 2rem;
        background: red;
        border: 2px solid black;
        padding: 0.5rem;
        border-radius: 1rem;
      }

      .type-container {
        position: absolute;
        top: -25px;
        left: 53%;
        transform: translateX(-50%);

        img {
          width: 50px;
          margin-left: -20px;
        }
      }

      .name-health-container {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-top: 3rem;

        .hp {
          position: absolute;
          top: 5px;
          right: 5px;
          font-size: 1.25rem;
          color: white;
        }

        .pokemon-card-title {
          text-align: center;
          text-transform: capitalize;
          font-size: 2rem;
          color: white;
          font-family: 'Bebas Neue', cursive;
          letter-spacing: 0.25rem;
          z-index: 2;
          text-shadow: 0px 5px 30px white;
        }
      }

      .pokemon-card-image-dream-world,
      .pokemon-card-image-official,
      .pokemon-card-image-default {
        height: 190px;
        padding: 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .id {
        position: absolute;
        bottom: -15px;
        background: white;
        left: 50%;
        transform: translateX(-50%);
        padding: 1rem 2rem;
        border-radius: 2rem;
        box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export default Pokemon;
