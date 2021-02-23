import React from 'react';
// Styled components
import styled from 'styled-components';
// Components
import Tile from './Tile';

const PokemonTiles = ({
  filteredData,
  isDefaultSelected,
  isDreamWorldSelected,
  isOfficialSelected,
}) => {
  return (
    <StyledPokemonTiles className="pokemon-cards-container">
      {filteredData && filteredData.length === 0 && (
        <h2 className="no-results">No results</h2>
      )}
      {filteredData &&
        filteredData.map((pokemon) => (
          <Tile
            key={pokemon.name}
            pokemon={pokemon}
            isDefaultSelected={isDefaultSelected}
            isDreamWorldSelected={isDreamWorldSelected}
            isOfficialSelected={isOfficialSelected}
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 0.25fr)) !important;

  .no-results {
    text-align: center;
  }
`;

export default PokemonTiles;
