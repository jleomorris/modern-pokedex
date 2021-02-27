import React, { useState, useEffect } from 'react';
// Styled components
import styled from 'styled-components';
// Axios
import axios from 'axios';
// React Router
import { useHistory } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Util
import { convertTypeToColor, convertToTypeImage } from '../util';
// Components
import EvolutionChart from './EvolutionChart';
import Abilities from './Abilities';
import ForwardBackButtons from './ForwardBackButtons';
import Moves from './Moves';
import ChartExample from './ChartExample';
import StatChart from './StatChart';
// Images
import close from '../img/close-button.svg';

const InnerDetails = ({
  selectedPokemon,
  selectedPokemon2,
  setPokemonId,
  ownMoves,
}) => {
  // React Router
  const history = useHistory();
  // Redux
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  //   const pokemonData2 = useSelector((state) => state.pokemon.pokemonData2);
  // State
  const [abilityData, setAbilityData] = useState();

  // Get abilities data
  useEffect(async () => {
    const allAbilityData = [];

    if (selectedPokemon.length > 0) {
      for (let i = 0; i < selectedPokemon[0].abilities.length; i += 1) {
        // console.log(
        //   'abilities url',
        //   selectedPokemon[0].abilities[0].ability.url
        // );

        const eachAbilitiesData = await axios.get(
          selectedPokemon[0].abilities[i].ability.url
        );

        allAbilityData.push(eachAbilitiesData.data);
      }

      await Promise.all(allAbilityData).then(() => {
        console.log('allAbilityData', allAbilityData);
        setAbilityData(allAbilityData);
      });
    }
  }, [selectedPokemon]);

  const exitDetailHandler = () => {
    document.body.style.overflow = 'auto';
    history.push('/pokemon');
  };

  return (
    <StyledInnerDetails className="inner-details">
      <div className="feature-type-symbol">
        {convertToTypeImage(selectedPokemon[0].types[0].type.name)}
      </div>
      {/* <img
        className="feature-type"
        src={selectedPokemon[0].types[0].type.name}
        alt="feature-type"
      /> */}
      <h2 className="feature-title">{selectedPokemon2[0].genera[8].genus}</h2>
      <button
        type="button"
        className="close-button"
        onClick={exitDetailHandler}
      >
        <img src={close} alt="exit" />
      </button>
      <ForwardBackButtons
        setPokemonId={setPokemonId}
        selectedPokemon={selectedPokemon}
      />
      <div className="title-id-container">
        <h2 className="pokemon-card-id">#{selectedPokemon[0].id}</h2>
        <h2 className="pokemon-card-title">{selectedPokemon[0].name}</h2>
        <p className="legendary-tag">
          {selectedPokemon2[0].is_legendary ? 'Legendary' : ''}
        </p>
      </div>
      <div className={`type ${selectedPokemon2[0].is_legendary ? 'mt-1' : ''}`}>
        {selectedPokemon[0].types.map((type) => (
          <p
            style={{
              background: convertTypeToColor(type.type.name),
            }}
            key={type.type.name}
          >
            {type.type.name}
          </p>
        ))}
      </div>
      <div className="description">
        <p>
          {selectedPokemon2[0].flavor_text_entries[0].flavor_text}
          {/* {JSON.parse(
                    selectedPokemon2[0].flavor_text_entries[0].flavor_text
                  )} */}
        </p>
      </div>
      <Abilities abilityData={abilityData} selectedPokemon={selectedPokemon} />
      <EvolutionChart
        pokemonData={pokemonData}
        selectedPokemon2={selectedPokemon2}
        selectedPokemon={selectedPokemon}
      />
      <Moves ownMoves={ownMoves} selectedPokemon={selectedPokemon} />
    </StyledInnerDetails>
  );
};

// Styled components
const StyledInnerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding-top: 7rem;
  padding-right: 3rem;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5f5f5f;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }

  .feature-type-symbol {
    img {
      position: absolute;
      top: -125px;
      transform: translateX(-20%);
      left: 20%;
      width: 500px;
      z-index: -1;
      opacity: 0.3;
    }
  }

  h2 {
    color: white;
    font-size: 10rem;
    text-transform: capitalize;
    margin-top: 2rem;
  }

  p {
    color: white;
  }

  .title-id-container {
    display: flex;
    align-items: baseline;
    position: relative;

    .pokemon-card-id {
      font-size: 2rem;
      font-weight: 100;
      opacity: 0.8;
      margin-right: 0.25rem;
    }

    .legendary-tag {
      position: absolute;
      bottom: -15px;
      right: -30px;
      color: gold;
      font-weight: 900;
      font-size: 2rem;
      letter-spacing: 0.5rem;
      text-transform: uppercase;
    }
  }

  .type {
    display: flex;

    p {
      border-radius: 1rem;
      margin: 0.5rem;
      padding: 0.5rem 1rem;
      color: black;
    }
  }

  .feature-title {
    position: absolute;
    top: 70px;
    right: 0;
    font-size: 15rem;
    opacity: 0.2;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    margin: 2rem 0rem;
    z-index: -1;
  }

  .close-button {
    position: absolute;
    top: 115px;
    right: 20px;
    border: none;
    outline: none;
    cursor: pointer;

    img {
      height: 50px;
      background: black;
    }
  }

  .description {
    width: 55%;
    margin: 1rem 0rem;
    text-align: right;

    p {
      font-size: 2rem;
    }
  }
`;

export default InnerDetails;
