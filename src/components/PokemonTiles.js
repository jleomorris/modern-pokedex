import React from 'react';
// Styled components
import styled from 'styled-components';
// Redux
import { useSelector } from 'react-redux';
// Components
import Tile from './Tile';

const PokemonTiles = ({
  filteredData,
  isDefaultSelected,
  isBlackAndWhiteAnimatedSelected,
  isDreamWorldSelected,
  isOfficialSelected,
  isShinySelected,
  isShinyAnimatedSelected,
  isFilterBySearchActive,
  isFilterByTypeActive,
  isFilterByStatActive,
  is3dSelected,
  isDarkModeActive,
}) => {
  // Redux
  const typeData = useSelector((state) => state.types.typeData);

  return (
    <StyledPokemonTiles className="pokemon-cards-container">
      {filteredData &&
        filteredData.length === 0 &&
        (isFilterBySearchActive ||
          isFilterByTypeActive ||
          isFilterByStatActive) && (
          <h2
            className={`no-results ${isDarkModeActive ? 'dark-mode-font' : ''}`}
          >
            No results
          </h2>
        )}
      {typeData.length > 0 &&
        filteredData &&
        filteredData.map((pokemon) => (
          <Tile
            key={pokemon.name}
            pokemon={pokemon}
            isDefaultSelected={isDefaultSelected}
            isBlackAndWhiteAnimatedSelected={isBlackAndWhiteAnimatedSelected}
            isDreamWorldSelected={isDreamWorldSelected}
            isOfficialSelected={isOfficialSelected}
            isShinySelected={isShinySelected}
            isShinyAnimatedSelected={isShinyAnimatedSelected}
            is3dSelected={is3dSelected}
          />
        ))}
    </StyledPokemonTiles>
  );
};

// Styled components
const StyledPokemonTiles = styled.div`
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  margin: 4rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr)) !important;
  }

  .no-results {
    text-align: center;
  }
`;

export default PokemonTiles;
