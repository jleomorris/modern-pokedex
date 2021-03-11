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
import {
  convertTypeToColor,
  convertToTypeImage,
  removeNonAscii,
} from '../util';
// Components
import EvolutionChart from './EvolutionChart';
import Abilities from './Abilities';
import ForwardBackButtons from './ForwardBackButtons';
import Moves from './Moves';
import LocationArea from './LocationArea';
// Images
import close from '../img/close-button.svg';
import egg from '../img/egg.png';
import training from '../img/training.png';

const InnerDetails = ({ selectedPokemon, setPokemonId, ownMoves }) => {
  // React Router
  const history = useHistory();
  // Redux
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  //   const pokemonData2 = useSelector((state) => state.pokemon.pokemonData2);
  // State
  const [abilityData, setAbilityData] = useState();
  const [description, setDescription] = useState();

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

  // Filter english descriptions
  useEffect(() => {
    if (selectedPokemon) {
      const englishEntries = selectedPokemon[0].flavor_text_entries.filter(
        (entry) => entry.language.name === 'en'
      );
      setDescription(englishEntries);
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
      <h2 className="feature-title">{selectedPokemon[0].genera[8].genus}</h2>
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
          {selectedPokemon[0].is_legendary ? 'Legendary' : ''}
        </p>
      </div>
      <div className={`type ${selectedPokemon[0].is_legendary ? 'mt-1' : ''}`}>
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
        {description && <p>{removeNonAscii(description[0].flavor_text)}</p>}
      </div>
      <Abilities abilityData={abilityData} selectedPokemon={selectedPokemon} />
      <div className="training-egg-container">
        <div className="training">
          <img src={training} alt="training" className="training-icon" />
          <h3>Training</h3>
          <div className="stat">
            <p className="title">Base happiness</p>
            <p className="detail">{selectedPokemon[0].base_happiness}</p>
          </div>
          <div className="stat">
            <p className="title">Catch rate</p>
            <p className="detail">{selectedPokemon[0].capture_rate}</p>
          </div>
          <div className="stat">
            <p className="title">Base exp</p>
            <p className="detail">{selectedPokemon[0].base_experience}</p>
          </div>
          <div className="stat">
            <p className="title">Growth rate</p>
            <p className="detail">{selectedPokemon[0].growth_rate.name}</p>
          </div>
        </div>
        <div className="egg">
          <img src={egg} alt="egg" className="egg-icon" />
          <h3>Egg</h3>
          <div className="stat">
            <p className="title">Egg groups</p>
            {selectedPokemon[0].egg_groups.map((group, index) => (
              <p className="detail">
                {index !== selectedPokemon[0].egg_groups.length - 1
                  ? `${group.name},`
                  : group.name}
              </p>
            ))}
          </div>
          <div className="stat">
            <p className="title">Cycles</p>
            <p className="detail">{selectedPokemon[0].hatch_counter}</p>
          </div>
        </div>
      </div>
      <LocationArea selectedPokemon={selectedPokemon} />
      <EvolutionChart
        pokemonData={pokemonData}
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
    width: 1rem;
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
    right: 30px;
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

  .training-egg-container {
    width: 70%;
    margin: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    h3 {
      color: white;
      width: 100%;
      text-transform: uppercase;
      margin: 2rem 0rem;
    }

    .training,
    .egg {
      position: relative;
      width: 50%;

      .egg-icon,
      .training-icon {
        position: absolute;
        top: 0;
        left: -25px;
        width: 60px;
        z-index: -1;
        opacity: 0.6;
      }

      .stat {
        position: relative;
        width: fit-content;
        margin: 1rem 0rem;

        .title {
          font-size: 2rem;
          display: inline-block;
          color: #ffffff59;
        }

        .detail {
          font-size: 3rem;
          font-weight: 900;
          display: inline-block;
          color: rgba(256, 256, 256, 0.8);
          margin-left: 1rem;
        }
      }
    }
  }
`;

export default InnerDetails;
