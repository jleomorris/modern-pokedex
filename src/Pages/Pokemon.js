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
import PokemonTiles from '../components/PokemonTiles';

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
  const [selectedTypeOption, setSelectedTypeOption] = useState(null);
  const [selectedStatOption, setSelectedStatOption] = useState(null);
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

  const filterPokemonByTypeHandler = (e) => {
    console.log(e.value);
    const typeToFilter = e.value;
    const allPokemon = pokemonData;
    const filteredByType = [];

    if (typeToFilter === 'reset') {
      setFilteredData(pokemonData);
      return;
    }

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

    setSelectedTypeOption(typeToFilter);
    setFilteredData(filteredByType);
    setSelectedStatOption('');
  };

  const filterPokemonByStatHandler = (e) => {
    console.log(e.value);
    const statToFilter = e.value;
    const allPokemon = pokemonData;
    const filteredByStat = [];

    if (statToFilter === 'reset') {
      setFilteredData(pokemonData);
      return;
    }

    // Check if each pokemons type matches the type to filter
    for (let i = 0; i < allPokemon.length; i += 1) {
      const maxStat = allPokemon[i].stats.reduce((prev, current) =>
        prev.base_stat > current.base_stat ? prev : current
      );

      console.info('maxstat', maxStat);
      console.info('stattofilter', statToFilter);
      console.info('name', allPokemon[i].name);

      //   debugger;

      if (maxStat.stat.name === statToFilter) {
        filteredByStat.push(allPokemon[i]);
      }
    }

    console.info('filteretedbystat', filteredByStat);
    setFilteredData(filteredByStat);
    setSelectedTypeOption('');
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
        filterPokemonByStatHandler={filterPokemonByStatHandler}
        selectedTypeOption={selectedTypeOption}
        selectedStatOption={selectedStatOption}
      />
      <PokemonTiles
        filteredData={filteredData}
        isDefaultSelected={isDefaultSelected}
        isDreamWorldSelected={isDreamWorldSelected}
        isOfficialSelected={isOfficialSelected}
      />
    </StyledPokemon>
  );
};

// Styled components
const StyledPokemon = styled.div`
  padding: 6rem 0rem;
  min-height: 100vh;
  position: relative;
`;

export default Pokemon;
