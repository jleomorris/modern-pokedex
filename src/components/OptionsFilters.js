import React from 'react';
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
  );
};

export default OptionsFilters;
