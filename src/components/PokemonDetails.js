import React, { useState } from 'react';
// Styled components
import styled from 'styled-components';
// Redux
import { useSelector } from 'react-redux';

const PokemonDetails = (pokemonId) => {
  // Redux
  const gen1Pokemon = useSelector((state) => state.pokemon.generation1);
  // State
  const [selectedPokemon, setSelectedPokemon] = useState(
    gen1Pokemon.filter(
      (pokemon) => pokemon.id.toString() === pokemonId.pokemonId
    )
  );

  return (
    <StyledPokemonDetails className="pokemon-details">
      <div className="details-container">
        {selectedPokemon && (
          <>
            <p>{selectedPokemon[0].name}</p>
            <img
              className="pokemon-card-image-official"
              src={
                Object.values(selectedPokemon[0].sprites.other)[1].front_default
              }
              alt={selectedPokemon[0].name}
            />
          </>
        )}
      </div>
    </StyledPokemonDetails>
  );
};

// Styled components
const StyledPokemonDetails = styled.div`
  background: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 40%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  display: flex;
  justify-content: start;
  align-items: start;

  .details-container {
    width: 75%;
    height: 65%;
    border-radius: 2rem;
    background: rgba(256, 256, 256, 1);
    margin: 2rem -4rem;
  }
`;

export default PokemonDetails;
