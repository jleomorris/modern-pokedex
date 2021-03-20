import React from 'react';
// Styled components
import styled from 'styled-components';
// React select
import Select from 'react-select';
// Components
import DynamicSprite from './DynamicSprite';
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
        {spriteIndex === 2 && <DynamicSprite id={6} type="black and white" />}
        {spriteIndex === 3 && (
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            alt="sprite"
          />
        )}
        {spriteIndex === 4 && <img src={charizardShiny} alt="sprite" />}
        {spriteIndex === 5 && <DynamicSprite id={6} type="shiny" />}
        {spriteIndex === 6 && (
          <DynamicSprite id={6} type="3d" name="charizard" />
        )}
        <button type="button" onClick={spriteSelectionHandler}>
          <p>Sprite Type</p>
          {spriteIndex === 0 && 'Official'}
          {spriteIndex === 1 && 'Default'}
          {spriteIndex === 2 && 'B & W Animated'}
          {spriteIndex === 3 && 'Dream World'}
          {spriteIndex === 4 && 'Shiny'}
          {spriteIndex === 5 && 'Shiny Animated'}
          {spriteIndex === 6 && '3D'}
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
          onClick={() => setIsDarkModeActive((prev) => !prev)}
        >
          <p>Dark Mode</p>
          {isDarkModeActive ? 'Off' : 'On'}
        </button>
      </div>
      <div className="search-container">
        <p className={`${isDarkModeActive ? 'dark-mode-font' : ''}`}>
          Filter by search
        </p>
        <input
          type="text"
          className="search-pokemon"
          onChange={filterPokemonBySearchHandler}
        />
      </div>
      <div className="type-filter-container" style={{ zIndex: '4' }}>
        <p className={`${isDarkModeActive ? 'dark-mode-font' : ''}`}>
          Filter by element
        </p>
        <Select
          defaultValue={selectedTypeOption}
          style={{ zIndex: '3' }}
          onChange={filterPokemonByTypeHandler}
          options={typeOptions}
          width="500px"
          //   value={selectedTypeOption}
        />
      </div>
      <div className="stat-filter-container" style={{ zIndex: '3' }}>
        <p className={`${isDarkModeActive ? 'dark-mode-font' : ''}`}>
          Filter by max stat
        </p>
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

    @media (max-width: 500px) {
      width: 35%;
    }

    @media (max-width: 400px) {
      width: 30%;
    }

    img {
      position: absolute;
      top: -50px;
      height: 120px;
      left: -60px;

      @media (max-width: 400px) {
        top: -40px;
        height: 100px;
        left: -50px;
      }
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

      @media (max-width: 400px) {
        font-size: 1rem;
      }

      p {
        font-size: 1.5rem;

        @media (max-width: 400px) {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
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

    @media (max-width: 400px) {
      margin: 1rem 2rem;
      width: 30%;
    }

    p {
      font-family: 'Bebas Neue', cursive;
      font-size: 1.5rem;
      font-weight: 900;
      width: 100%;
    }
  }
`;

export default OptionsFilters;
