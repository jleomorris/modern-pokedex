import React, { useState, useEffect } from 'react';
// Styled components
import styled from 'styled-components';
// React Router
import { useHistory } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Components
import PokemonCard from './PokemonCard';
// Util
// import { convertToTypeImage, convertToTypeBackground } from '../util';

const PokemonDetails = ({ pokemonId }) => {
  // React Router
  const history = useHistory();
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  });

  const exitDetailHandler = (e) => {
    const element = e.target;
    // console.log(element);

    if (element.classList.contains('details-shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/pokemon');
    }
  };

  return (
    <DetailsShadow className="details-shadow" onClick={exitDetailHandler}>
      <StyledPokemonDetails className="pokemon-details">
        {selectedPokemon && selectedPokemon2 && (
          <PokemonCard pokemonId={pokemonId} />
        )}
      </StyledPokemonDetails>
    </DetailsShadow>
  );
};

// Styled components
const DetailsShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const StyledPokemonDetails = styled.div`
  background: rgba(0, 0, 0, 0.9);
  height: 102vh;
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
