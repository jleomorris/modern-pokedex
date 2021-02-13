import React, { useState } from 'react';
// Styled components
import styled from 'styled-components';
// Redux
import { useSelector } from 'react-redux';
// Components
import PokemonCard from './PokemonCard';
// Util
// import { convertToTypeImage, convertToTypeBackground } from '../util';

const PokemonDetails = ({ pokemonId }) => {
  // Redux
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  const pokemonData2 = useSelector((state) => state.pokemon.pokemonData2);
  // State
  const [selectedPokemon, setSelectedPokemon] = useState(
    pokemonData.filter((pokemon) => pokemon.id.toString() === pokemonId)
  );
  const [selectedPokemon2, setSelectedPokemon2] = useState(
    pokemonData2.filter((pokemon) => pokemon.id.toString() === pokemonId)
  );

  return (
    <StyledPokemonDetails className="pokemon-details">
      {selectedPokemon && selectedPokemon2 && (
        <PokemonCard pokemonId={pokemonId} />
      )}
    </StyledPokemonDetails>
  );
};

// Styled components
const StyledPokemonDetails = styled.div`
  background: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 80%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  display: flex;
  justify-content: start;
  align-items: start;

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export default PokemonDetails;
