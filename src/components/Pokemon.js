import React, { useEffect, useState } from 'react';
// Styled components
import styled from 'styled-components';
// React Router
import { useLocation, Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGen1Data } from '../redux/pokemonReducer';
// Images
import bulbasaurDefault from '../img/bulbasaur_default.png';
import lunatoneOfficial from '../img/lunatone_official.png';
import solrockOfficial from '../img/solrock_official.png';
// Util
import {
  typeImages,
  convertToTypeImage,
  convertToTypeBackground,
} from '../util';
// Components
import PokemonDetails from './PokemonDetails';

const Pokemon = () => {
  // Redux
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  // State
  const [filteredData, setFilteredData] = useState();
  const [isDefaultSelected, setIsDefaultSelected] = useState(false);
  const [isOfficialSelected, setIsOfficalSelected] = useState(true);
  const [isDreamWorldSelected, setIsDreamWorldSelected] = useState(false);
  const [spriteIndex, setSpriteIndex] = useState(2);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [isBlurActive, setIsBlurActive] = useState(false);
  const [isFilterByTypeActive, setIsFilterByTypeActive] = useState(false);
  const [typeFilterInEffect, setTypeFilterInEffect] = useState();
  // Router
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  console.log('pathId', pathId);

  // Set blur if a card is being viewed
  useEffect(() => {
    console.log('location', location);
    if (location.pathname !== '/pokemon') {
      setIsBlurActive(true);
    } else {
      setIsBlurActive(false);
    }
  }, [location]);

  // Check that all data is loading
  useEffect(() => {
    dispatch(loadGen1Data());
    console.log(pokemonData);
  }, [dispatch]);

  // Set filtered data when all intial data is loaded
  useEffect(() => {
    setFilteredData(pokemonData);
  }, [pokemonData]);

  // Set sprite type based on index
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

  // Filter pokemon by user search
  const filterPokemonBySearchHandler = (e) => {
    console.log(e.target.value);

    const allPokemon = pokemonData;
    const userInput = e.target.value;
    const allTypeImages = document.querySelectorAll('.type-filter-image');
    const filteredByInput = allPokemon.filter((pokemon) =>
      pokemon.name.includes(userInput)
    );

    // Reset color of all type icons
    for (let i = 0; i < allTypeImages.length; i += 1) {
      allTypeImages[i].style.filter = 'grayscale(0)';
    }

    setFilteredData(filteredByInput);
  };

  // Apply grayscale filters to type icons when one is selected
  const applyGrayscaleHandler = (type) => {
    const allTypeImages = document.querySelectorAll('.type-filter-image');
    const resetAll = () => {
      for (let i = 0; i < allTypeImages.length; i += 1) {
        allTypeImages[i].style.filter = 'grayscale(0)';
      }
    };

    // If selected type filter is already in effect remove all grayscale and reset filtered data
    if (isFilterByTypeActive && typeFilterInEffect === type) {
      console.log(`${type} type already selected, undo filters and reset`);
      resetAll();
      setFilteredData(pokemonData);
      setIsFilterByTypeActive(false);
    }

    if (
      !isFilterByTypeActive ||
      (isFilterByTypeActive && typeFilterInEffect !== type)
    ) {
      console.log(`apply ${type} type filter and greyscale all`);
      // Apply greyscale to all but the one selected
      for (let i = 0; i < allTypeImages.length; i += 1) {
        if (allTypeImages[i].className.includes(type) === false) {
          allTypeImages[i].style.filter = 'grayscale(1)';
        } else {
          allTypeImages[i].style.filter = 'grayscale(0)';
        }
      }
    }
  };

  // Filter pokemon by type
  const filterPokemonByTypeHandler = (typeToFilter) => {
    const allPokemon = pokemonData;
    const filteredByType = [];

    // Check if each pokemons type matches the type to filter
    for (let i = 0; i < allPokemon.length; i += 1) {
      // 1 type
      if (allPokemon[i].types.length === 1) {
        if (allPokemon[i].types[0].type.name === typeToFilter) {
          filteredByType.push(allPokemon[i]);
        }
      }

      // 2 types
      if (allPokemon[i].types.length === 2) {
        if (
          allPokemon[i].types[0].type.name === typeToFilter ||
          allPokemon[i].types[1].type.name === typeToFilter
        ) {
          filteredByType.push(allPokemon[i]);
        }
      }
    }

    setFilteredData(filteredByType);
    setIsFilterByTypeActive(true);
    setTypeFilterInEffect(typeToFilter);
    applyGrayscaleHandler(typeToFilter);
  };

  return (
    <StyledPokemon
      className={`pokemon ${isBlurActive ? 'enable-blur' : ''} ${
        isDarkModeActive ? 'dark-mode' : ''
      }`}
    >
      {pathId && (
        <PokemonDetails
          pathId={pathId}
          isDreamWorldSelected={isDreamWorldSelected}
          isDefaultSelected={isDefaultSelected}
          isOfficialSelected={isOfficialSelected}
        />
      )}
      {/* MOVE TO ANOTHER COMPONENT */}
      <div className="custom-buttons">
        <div className="custom-button-container">
          {spriteIndex === 0 && <img src={bulbasaurDefault} alt="sprite" />}
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
        <div className="custom-button-container">
          <img
            src={isDarkModeActive ? lunatoneOfficial : solrockOfficial}
            alt="sprite"
            className="dark-mode-sprite"
          />
          <button
            type="button"
            onClick={() => setIsDarkModeActive(!isDarkModeActive)}
          >
            <p>Dark Mode</p>
            {isDarkModeActive ? 'Off' : 'On'}
          </button>
        </div>
        <div className="search-container">
          <p>Filter by search:</p>
          <input
            type="text"
            className="search-pokemon"
            onChange={filterPokemonBySearchHandler}
          />
        </div>
        <div className="type-filter-container">
          <p>Filter by element (click again to remove)</p>
          {typeImages.map((type) => (
            <div
              onClick={() => filterPokemonByTypeHandler(type.type)}
              onKeyPress={filterPokemonByTypeHandler}
              role="presentation"
            >
              <img
                className={`${type.type} type-filter-image`}
                src={type.image}
                alt={`${type.type} logo`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pokemon-card-container">
        {filteredData &&
          filteredData.map((pokemon) => (
            // MOVE TO ANOTHER COMPONENT
            <div key={pokemon.name} className="pokemon-card">
              <div className="background-circle" />
              <div className="background-image-container">
                {convertToTypeBackground(pokemon.types[0].type.name)}
              </div>
              <p className="attack">{pokemon.stats[1].base_stat}</p>
              <div className="type-container">
                {pokemon.types.map((type) => (
                  <>{convertToTypeImage(type.type.name)}</>
                ))}
              </div>
              <div className="name-health-container">
                <h2 className="pokemon-card-title">{pokemon.name}</h2>
                <p className="hp">{pokemon.stats[0].base_stat} HP</p>
              </div>
              <Link to={`/pokemon/${pokemon.id}`}>
                {isDreamWorldSelected && (
                  <img
                    className="pokemon-card-image-dream-world"
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                  />
                )}
                {isOfficialSelected && (
                  <img
                    className="pokemon-card-image-official"
                    src={Object.values(pokemon.sprites.other)[1].front_default}
                    alt={pokemon.name}
                  />
                )}
                {isDefaultSelected && (
                  <img
                    className="pokemon-card-image-default"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                  />
                )}
              </Link>
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
  padding: 6rem 0rem;
  min-height: 100vh;
  position: relative;

  .custom-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
    width: 80%;
    margin: 0 auto;

    .custom-button-container {
      /* border: 1px solid blue; */
      position: relative;
      margin: 0rem 2rem;

      img {
        position: absolute;
        top: -50px;
        height: 100px;
        left: -60px;
      }

      .dark-mode-sprite {
        top: -50px;
        left: -30px;
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
        /* transition: all 5s ease; */

        p {
          font-size: 1.5rem;
        }
      }
    }

    .search-container {
      p {
        font-family: 'Bebas Neue', cursive;
        font-size: 1.5rem;
        font-weight: 900;
      }

      input {
        font-size: 1.5rem;
        padding: 1rem;
        outline: none;
        border-radius: 1rem;
      }
    }

    .type-filter-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 2rem;

      p {
        font-family: 'Bebas Neue', cursive;
        font-size: 1.5rem;
        font-weight: 900;
        width: 100%;
      }

      img {
        height: 40px;
        width: 40px;
        cursor: pointer;
        margin: 0.5rem;
      }
    }
  }

  .pokemon-card-container {
    /* border: 2px solid red; */
    display: grid;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    margin: 4rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;

    .pokemon-card {
      height: 300px;
      margin: 2rem 1rem;
      display: flex;
      justify-content: start;
      flex-direction: column;
      align-items: center;
      border-radius: 1rem;
      position: relative;
      box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);

      a {
        /* width: 100%;
        height: 100%; */
      }

      .background-circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 150px;
        width: 150px;
        background: #ffffffa3;
        border-radius: 50%;
        z-index: 1;
      }

      .background-image-container {
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        /* z-index: -2; */
      }

      .background-image {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 1rem;
        /* z-index: -2; */
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
        z-index: 1;
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
