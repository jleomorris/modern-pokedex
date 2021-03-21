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
import {
  reactSelectTypeOptions,
  reactSelectStatOptions,
  reactSelectSpriteOptions,
  reactSelectDarkModeOptions,
} from '../util';

const OptionsFilters = ({
  spriteSelectionHandler,
  isDarkModeActive,
  filterPokemonBySearchHandler,
  filterPokemonByTypeHandler,
  filterPokemonByStatHandler,
  setIsDarkModeActive,
  selectedTypeOption,
  selectedStatOption,
  isOfficialSelected,
  isDefaultSelected,
  isDreamWorldSelected,
  isShinySelected,
  isShinyAnimatedSelected,
  is3dSelected,
  isBlackAndWhiteAnimatedSelected,
}) => {
  // React select
  const typeOptions = reactSelectTypeOptions;
  const statOptions = reactSelectStatOptions;
  const spriteOptions = reactSelectSpriteOptions;
  const darkModeOptions = reactSelectDarkModeOptions;

  const darkModeHandler = (e) => {
    console.log(e.value);
    const darkModeAction = e.value;

    if (darkModeAction === 'dark mode on') {
      setIsDarkModeActive(true);
    } else if (darkModeAction === 'dark mode off') {
      setIsDarkModeActive(false);
    }
  };

  return (
    <StyledOptionsFilters className="options-filters">
      <div className="sprite-change-container" style={{ zIndex: '4' }}>
        <div className="container">
          {isOfficialSelected && (
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
              alt="sprite"
            />
          )}
          {isDefaultSelected && <img src={charizardDefault} alt="sprite" />}
          {isBlackAndWhiteAnimatedSelected && (
            <DynamicSprite id={6} type="black and white" />
          )}
          {isDreamWorldSelected && (
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
              alt="sprite"
            />
          )}
          {isShinySelected && <img src={charizardShiny} alt="sprite" />}
          {isShinyAnimatedSelected && <DynamicSprite id={6} type="shiny" />}
          {is3dSelected && <DynamicSprite id={6} type="3d" name="charizard" />}
        </div>
        <p className={`${isDarkModeActive ? 'dark-mode-font' : ''}`}>
          Change sprite type
        </p>
        <Select
          defaultValue="official"
          onChange={spriteSelectionHandler}
          options={spriteOptions}
          width="500px"
        />
      </div>
      <div className="dark-mode-change-container" style={{ zIndex: '4' }}>
        <div className="container">
          {isDarkModeActive && <img src={lunatoneOfficial} alt="lunatone" />}
          {!isDarkModeActive && <img src={solrockOfficial} alt="solrock" />}
        </div>
        <p className={`${isDarkModeActive ? 'dark-mode-font' : ''}`}>
          Dark Mode
        </p>
        <Select
          defaultValue="dark mode off"
          onChange={darkModeHandler}
          options={darkModeOptions}
          width="500px"
        />
      </div>
      <div className="type-filter-container" style={{ zIndex: '3' }}>
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
    </StyledOptionsFilters>
  );
};

// Styled components
const StyledOptionsFilters = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 4rem;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;

  .sprite-change-container,
  .dark-mode-change-container {
    .container {
      position: relative;
      height: 100px;
      width: 100%;
      margin-bottom: 1rem;

      img {
        height: 100px;
        width: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

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

    .dark-mode-sprite {
      top: -50px;
      left: -30px;
      height: 100px;

      @media (max-width: 400px) {
        height: 80px;
      }
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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
      width: 20%;
    }
  }

  .type-filter-container,
  .stat-filter-container,
  .sprite-change-container,
  .dark-mode-change-container {
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
