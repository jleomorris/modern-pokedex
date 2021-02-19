import React from 'react';
// Styled components
import styled from 'styled-components';
// Images
import bulbasaurDefault from '../img/bulbasaur_default.png';
import lunatoneOfficial from '../img/lunatone_official.png';
import solrockOfficial from '../img/solrock_official.png';
// Util
import { typeImages } from '../util';

const OptionsFilters = ({
  spriteIndex,
  spriteSelectionHandler,
  isDarkModeActive,
  filterPokemonBySearchHandler,
  filterPokemonByTypeHandler,
  setIsDarkModeActive,
}) => {
  return (
    <StyledOptionsFilters className="options-filters">
      <div className="option-filter">
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
        <p>Filter by element (click again to remove)</p>
        {typeImages.map((type) => (
          <div
            key={type.type}
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
    width: 50%;

    @media (max-width: 1000px) {
      width: 80%;
    }

    p {
      font-family: 'Bebas Neue', cursive;
      font-size: 1.5rem;
      font-weight: 900;
      width: 100%;
    }

    img {
      height: 60px;
      width: 60px;
      cursor: pointer;
      margin: 0.5rem;
    }
  }
`;

export default OptionsFilters;
