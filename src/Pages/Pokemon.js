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
import LoadingModal from '../components/LoadingModal';
import Footer from '../components/Footer';
import ScrollToTopOfPage from '../components/ScrollToTopOfPage';

const Pokemon = () => {
  // Redux
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  // State
  const [filteredData, setFilteredData] = useState();
  const [isDefaultSelected, setIsDefaultSelected] = useState(false);
  const [
    isBlackAndWhiteAnimatedSelected,
    setisBlackAndWhiteAnimatedSelected,
  ] = useState(false);
  const [isOfficialSelected, setIsOfficalSelected] = useState(true);
  const [isDreamWorldSelected, setIsDreamWorldSelected] = useState(false);
  const [isShinySelected, setIsShinySelected] = useState(false);
  const [isShinyAnimatedSelected, setIsShinyAnimatedSelected] = useState(false);
  const [is3dSelected, setIs3dSelected] = useState(false);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const [isBlurActive, setIsBlurActive] = useState(false);
  const [isFilterByTypeActive, setIsFilterByTypeActive] = useState(false);
  const [typeFilterInEffect, setTypeFilterInEffect] = useState();
  const [isFilterByStatActive, setIsFilterByStatActive] = useState(false);
  const [statFilterInEffect, setStatFilterInEffect] = useState();
  const [isFilterBySearchActive, setIsFilterBySearchActive] = useState(false);
  const [selectedTypeOption, setSelectedTypeOption] = useState(null);
  const [selectedStatOption, setSelectedStatOption] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState('');
  // Router
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  //   useEffect(() => {
  //     document.body.style.overflow = 'auto';
  //   }, []);

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
  const spriteSelectionHandler = (e) => {
    console.log('Pokemon.spriteSelectionHander.e', e);
    const spriteToChangeTo = e.value || e;

    // Reset all
    setIsOfficalSelected(false);
    setIsDefaultSelected(false);
    setisBlackAndWhiteAnimatedSelected(false);
    setIsDreamWorldSelected(false);
    setIsShinySelected(false);
    setIsShinyAnimatedSelected(false);
    setIs3dSelected(false);

    if (spriteToChangeTo === 'default') {
      setIsDefaultSelected(true);
    } else if (spriteToChangeTo === 'B&W') {
      setisBlackAndWhiteAnimatedSelected(true);
    } else if (spriteToChangeTo === 'dream world') {
      setIsDreamWorldSelected(true);
    } else if (spriteToChangeTo === 'shiny') {
      setIsShinySelected(true);
    } else if (spriteToChangeTo === 'shiny animated') {
      setIsShinyAnimatedSelected(true);
    } else if (spriteToChangeTo === '3D') {
      setIs3dSelected(true);
    } else if (spriteToChangeTo === 'official') {
      setIsOfficalSelected(true);
    }
  };

  // Filter pokemon by user search
  const filterPokemonBySearchHandler = (e) => {
    console.log(e.target.value);

    const allPokemon = pokemonData;
    const userInput = e.target.value.toLowerCase();
    setSearchInputValue(userInput);
    const allTypeImages = document.querySelectorAll('.type-filter-image');
    const filteredByInput = allPokemon.filter((pokemon) =>
      pokemon.name.includes(userInput)
    );

    // Reset color of all type icons
    for (let i = 0; i < allTypeImages.length; i += 1) {
      allTypeImages[i].style.filter = 'grayscale(0)';
    }

    setFilteredData(filteredByInput);
    setIsFilterBySearchActive(true);
    if (userInput.length === 0) setIsFilterBySearchActive(false);
    setTypeFilterInEffect('');
    setStatFilterInEffect('');
  };

  // Filter pokemon by type
  const filterPokemonByTypeHandler = (e) => {
    setStatFilterInEffect();
    setSearchInputValue('');

    const typeToFilter = e.value;
    setTypeFilterInEffect(typeToFilter);
    const allPokemon = pokemonData;
    const filteredByType = [];

    if (typeToFilter === 'reset') {
      setFilteredData(pokemonData);
      setIsFilterByTypeActive(false);
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
    setIsFilterByTypeActive(true);
  };

  // Filter pokemon by stat
  const filterPokemonByStatHandler = (e) => {
    setTypeFilterInEffect();
    setSearchInputValue('');

    const statToFilter = e.value;
    setStatFilterInEffect(statToFilter);
    const allPokemon = pokemonData;
    const filteredByStat = [];

    if (statToFilter === 'reset') {
      setFilteredData(pokemonData);
      setIsFilterByStatActive(false);
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
    setSelectedTypeOption(null);
    setIsFilterByStatActive(true);
    // filterPokemonByTypeHandler('reset');
  };

  return (
    <>
      <StyledPokemon
        className={`pokemon ${
          isBlurActive ? 'enable-blur enable-cursor' : ''
        } ${isDarkModeActive ? 'dark-mode' : ''}`}
      >
        <ScrollToTopOfPage />
        {pathId && (
          <PokemonDetails
            pathId={pathId}
            isDreamWorldSelected={isDreamWorldSelected}
            isDefaultSelected={isDefaultSelected}
            isOfficialSelected={isOfficialSelected}
            isShinySelected={isShinySelected}
            isBlackAndWhiteAnimatedSelected={isBlackAndWhiteAnimatedSelected}
            isShinyAnimatedSelected={isShinyAnimatedSelected}
            is3dSelected={is3dSelected}
            spriteSelectionHandler={spriteSelectionHandler}
          />
        )}
        <OptionsFilters
          spriteSelectionHandler={spriteSelectionHandler}
          isDarkModeActive={isDarkModeActive}
          setIsDarkModeActive={setIsDarkModeActive}
          filterPokemonBySearchHandler={filterPokemonBySearchHandler}
          filterPokemonByTypeHandler={filterPokemonByTypeHandler}
          filterPokemonByStatHandler={filterPokemonByStatHandler}
          selectedTypeOption={selectedTypeOption}
          selectedStatOption={selectedStatOption}
          isOfficialSelected={isOfficialSelected}
          isDefaultSelected={isDefaultSelected}
          isDreamWorldSelected={isDreamWorldSelected}
          isShinySelected={isShinySelected}
          isShinyAnimatedSelected={isShinyAnimatedSelected}
          is3dSelected={is3dSelected}
          isBlackAndWhiteAnimatedSelected={isBlackAndWhiteAnimatedSelected}
          typeFilterInEffect={typeFilterInEffect}
          statFilterInEffect={statFilterInEffect}
          isFilterBySearchActive={isFilterBySearchActive}
          searchInputValue={searchInputValue}
        />
        <PokemonTiles
          filteredData={filteredData}
          isBlackAndWhiteAnimatedSelected={isBlackAndWhiteAnimatedSelected}
          isDefaultSelected={isDefaultSelected}
          isDreamWorldSelected={isDreamWorldSelected}
          isOfficialSelected={isOfficialSelected}
          isShinySelected={isShinySelected}
          isShinyAnimatedSelected={isShinyAnimatedSelected}
          isFilterBySearchActive={isFilterBySearchActive}
          isFilterByTypeActive={isFilterByTypeActive}
          isFilterByStatActive={isFilterByStatActive}
          is3dSelected={is3dSelected}
          isDarkModeActive={isDarkModeActive}
        />
        {filteredData &&
          !isFilterBySearchActive &&
          !isFilterByTypeActive &&
          !isFilterByStatActive &&
          filteredData.length === 0 && <LoadingModal />}
        {/* <LoadingModal /> */}
      </StyledPokemon>
      <Footer />
    </>
  );
};

// Styled components
const StyledPokemon = styled.div`
  padding: 6rem 0rem;
  min-height: 100vh;
  position: relative;

  @media (max-width: 400px) {
    padding: 4rem 0rem;
  }
`;

export default Pokemon;
