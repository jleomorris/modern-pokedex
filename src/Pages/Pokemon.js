import React, { useEffect, useState } from 'react';
// Styled components
import styled from 'styled-components';
// React Router
import { useLocation } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Components
import PokemonDetails from '../components/PokemonDetails';
import OptionsFilters from '../components/OptionsFilters';
import Card from '../components/Card';

const Pokemon = () => {
  // Redux
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

  // Set blur if a card is being viewed
  useEffect(() => {
    console.log('location', location);
    if (location.pathname !== '/pokemon') {
      setIsBlurActive(true);
    } else {
      setIsBlurActive(false);
    }
  }, [location]);

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
      className={`pokemon ${isBlurActive ? 'enable-blur enable-cursor' : ''} ${
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
      <OptionsFilters
        spriteIndex={spriteIndex}
        spriteSelectionHandler={spriteSelectionHandler}
        isDarkModeActive={isDarkModeActive}
        setIsDarkModeActive={setIsDarkModeActive}
        filterPokemonBySearchHandler={filterPokemonBySearchHandler}
        filterPokemonByTypeHandler={filterPokemonByTypeHandler}
      />
      <div className="pokemon-card-container">
        {filteredData && filteredData.length === 0 && (
          <h2 className="no-results">No results</h2>
        )}
        {filteredData &&
          filteredData.map((pokemon) => (
            <Card
              key={pokemon.name}
              pokemon={pokemon}
              isDefaultSelected={isDefaultSelected}
              isDreamWorldSelected={isDreamWorldSelected}
              isOfficialSelected={isOfficialSelected}
            />
          ))}
      </div>
    </StyledPokemon>
  );
};

// Styled components
const StyledPokemon = styled.div`
  padding: 6rem 0rem;
  min-height: 100vh;
  position: relative;

  .pokemon-card-container {
    display: grid;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    margin: 4rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;

    .no-results {
      text-align: center;
    }
  }
`;

export default Pokemon;
