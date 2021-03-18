import React, { useState, useEffect } from 'react';
// Styled components
import styled from 'styled-components';
// Redux
import { useSelector } from 'react-redux';
// Images
import rightArrow from '../img/right-arrow-white.svg';

const ForwardBackButtons = ({ selectedPokemon, setPokemonId }) => {
  // Redux
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  // State
  const [formerPokemon, setFormerPokemon] = useState();
  const [nextPokemon, setNextPokemon] = useState();

  useEffect(() => {
    const formerId =
      selectedPokemon[0].id === 1 ? 1 : selectedPokemon[0].id - 1;
    const nextId =
      selectedPokemon[0].id === 151 ? 151 : selectedPokemon[0].id + 1;

    setFormerPokemon(pokemonData.filter((pokemon) => pokemon.id === formerId));
    setNextPokemon(pokemonData.filter((pokemon) => pokemon.id === nextId));

    console.log(
      'selectedPokemon',
      selectedPokemon[0].name,
      selectedPokemon[0].id
    );
  }, [selectedPokemon]);

  useEffect(() => {
    if (formerPokemon) {
      console.log('former pokemon', formerPokemon[0].name, formerPokemon[0].id);
    }
  }, [formerPokemon]);

  useEffect(() => {
    if (nextPokemon) {
      console.log('nextPokemon', nextPokemon[0].name, nextPokemon[0].id);
    }
  }, [nextPokemon]);

  return (
    // Icons courtesy of icons8
    <StyledForwardBackButtons className="forward-back-button-container">
      {formerPokemon && selectedPokemon[0].name !== 'bulbasaur' && (
        <button
          className="back-button"
          type="button"
          onClick={() =>
            setPokemonId((prev) => (parseFloat(prev) - 1).toString())
          }
        >
          <p className="former-pokemon-id">#{formerPokemon[0].id}</p>
          <img className="back-arrow" src={rightArrow} alt="back arrow" />
          <img
            className="former-pokemon-image-official"
            src={Object.values(formerPokemon[0].sprites.other)[1].front_default}
            alt={formerPokemon[0].name}
          />
        </button>
      )}
      {nextPokemon && selectedPokemon[0].name !== 'mew' && (
        <button
          className="forward-button"
          type="button"
          onClick={() =>
            setPokemonId((prev) => (parseFloat(prev) + 1).toString())
          }
        >
          <p className="next-pokemon-id">#{nextPokemon[0].id}</p>
          <img className="forward-arrow" src={rightArrow} alt="forward arrow" />
          <img
            className="next-pokemon-image-official"
            src={Object.values(nextPokemon[0].sprites.other)[1].front_default}
            alt={nextPokemon[0].name}
          />
        </button>
      )}
    </StyledForwardBackButtons>
  );
};

// Styled components
const StyledForwardBackButtons = styled.div`
  margin: 1rem auto;

  @media (max-width: 800px) {
    margin: 3rem auto;
  }

  .back-button {
    border-radius: 1rem 0rem 0rem 1rem;
  }

  .forward-button {
    border-radius: 0rem 1rem 1rem 0rem;
  }

  button {
    outline: none;
    border: none;
    /* margin: 0rem 0.5rem; */
    cursor: pointer;
    background: rgba(256, 256, 256, 0.3);
    padding: 1.5rem;
    border-radius: 1rem;
    position: relative;

    img {
      height: 30px;
      filter: drop-shadow(0px 0px 5px black);
    }

    .back-arrow {
      transform: rotate(180deg);
    }

    .former-pokemon-id,
    .next-pokemon-id {
      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1rem;
      font-weight: 900;
    }

    .former-pokemon-image-official {
      position: absolute;
      bottom: -40px;
      left: -40px;
      width: 75px;
      height: 75px;
    }

    .next-pokemon-image-official {
      position: absolute;
      bottom: -40px;
      right: -40px;
      width: 75px;
      height: 75px;
    }
  }
`;

export default ForwardBackButtons;
