import React from 'react';
// Styled components
import styled from 'styled-components';
// React select
import Select from 'react-select';
// Components
import DynamicAnimatedDefaultSprite from './DynamicAnimatedDefaultSprite';
// Images
import charizardDefault from '../img/charizard_default.png';
import charizardShiny from '../img/charizard_shiny.png';
import lunatoneOfficial from '../img/lunatone_official.png';
import solrockOfficial from '../img/solrock_official.png';
// Util
import { reactSelectTypeOptions, reactSelectStatOptions } from '../util';

const OptionsFilters = ({
  spriteIndex,
  spriteSelectionHandler,
  isDarkModeActive,
  filterPokemonBySearchHandler,
  filterPokemonByTypeHandler,
  filterPokemonByStatHandler,
  setIsDarkModeActive,
  selectedTypeOption,
  selectedStatOption,
}) => {
  // React select
  const typeOptions = reactSelectTypeOptions;
  const statOptions = reactSelectStatOptions;

  return (
    <StyledOptionsFilters className="options-filters">
      <div className="option-filter">
        {spriteIndex === 0 && (
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
            alt="sprite"
          />
        )}
        {spriteIndex === 1 && <img src={charizardDefault} alt="sprite" />}
        {spriteIndex === 2 && <DynamicAnimatedDefaultSprite id={6} />}
        {spriteIndex === 3 && (
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            alt="sprite"
          />
        )}
        {spriteIndex === 4 && <img src={charizardShiny} alt="sprite" />}
        <button type="button" onClick={spriteSelectionHandler}>
          <p>Sprite Type</p>
          {spriteIndex === 0 && 'Official'}
          {spriteIndex === 1 && 'Default'}
          {spriteIndex === 2 && 'B & W Animated'}
          {spriteIndex === 3 && 'Dream World'}
          {spriteIndex === 4 && 'Shiny'}
        </button>
      </div>
      <div className="option-filter">
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
        <p>Filter by element</p>
        <Select
          defaultValue={selectedTypeOption}
          onChange={filterPokemonByTypeHandler}
          options={typeOptions}
          width="500px"
          //   value={selectedTypeOption}
        />
      </div>
      <div className="stat-filter-container">
        <p>Filter by max stat</p>
        <Select
          defaultValue={selectedStatOption}
          onChange={filterPokemonByStatHandler}
          options={statOptions}
          width="500px"
        />
      </div>
    </StyledOptionsFilters>
  );
};

// Styled components
const StyledOptionsFilters = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;

  .option-filter {
    /* border: 1px solid blue; */
    position: relative;
    margin: 1rem 2rem;

    img {
      position: absolute;
      top: -50px;
      height: 120px;
      left: -60px;
    }

    .dark-mode-sprite {
      top: -50px;
      left: -30px;
      height: 100px;
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

  .type-filter-container,
  .stat-filter-container {
    margin: 2rem;

    p {
      font-family: 'Bebas Neue', cursive;
      font-size: 1.5rem;
      font-weight: 900;
      width: 100%;
    }
  }
`;

export default OptionsFilters;
