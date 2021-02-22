import React, { useState, useEffect } from 'react';
// Styled components
import styled from 'styled-components';
// Axios
import axios from 'axios';
// Redux
import { useSelector } from 'react-redux';
// Images
import forwardArrow from '../img/icons8-forward-arrow-50.png';
import backArrow from '../img/icons8-reply-arrow-50.png';
// Util
import { convertTypeToColor } from '../util';
// Components
import EvolutionChart from './EvolutionChart';
import Abilities from './Abilities';

const InnerDetails = ({
  selectedPokemon,
  selectedPokemon2,
  setPokemonId,
  ownMoves,
  learnableMoves,
}) => {
  // Redux
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  const pokemonData2 = useSelector((state) => state.pokemon.pokemonData2);
  // State
  const [evolutionData, setEvolutionData] = useState();
  const [baseStage, setBaseStage] = useState();
  const [firstEvolution, setFirstEvolution] = useState();
  const [secondEvolution, setSecondEvolution] = useState();
  const [ashExtraSmall, setAshExtraSmall] = useState(false);
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

  return (
    <StyledInnerDetails className="inner-details">
      <h2 className="feature-title">{selectedPokemon2[0].genera[8].genus}</h2>
      {/* Icons courtesy of icons8 */}
      <div className="forward-back-button-container">
        <button
          type="button"
          onClick={() =>
            setPokemonId((prev) => (parseFloat(prev) - 1).toString())
          }
        >
          <img src={backArrow} alt="back arrow" />
        </button>
        <button
          type="button"
          onClick={() =>
            setPokemonId((prev) => (parseFloat(prev) + 1).toString())
          }
        >
          <img src={forwardArrow} alt="back arrow" />
        </button>
      </div>
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
      />
      <div className="move-container">
        <h3>Own moves</h3>
        <table className="move-table">
          <tr>
            <th className="move-header">Name</th>
            <th className="level-method-version-header">
              <th className="inner-heading">Level learned</th>
              <th className="inner-heading">Method</th>
              <th className="inner-heading">Version</th>
            </th>
          </tr>
          {ownMoves &&
            ownMoves
              .filter(
                (move) =>
                  move.version_group_details[0].version_group.name ===
                  'red-blue'
              )
              .map((move) => (
                <tr className="own-move" key={move.move.name}>
                  <td className="own-move-title">{move.move.name}</td>
                  <td>
                    {move.version_group_details
                      .filter(
                        (ver) =>
                          ver.version_group.name === 'red-blue' &&
                          ver.move_learn_method.name === 'level-up'
                      )
                      .map((moveDetails) => (
                        <>
                          <tr className="table-row-container">
                            <td className="level-learned">
                              {moveDetails.level_learned_at}
                            </td>
                            <td className="learn-method">
                              {moveDetails.move_learn_method.name}
                            </td>
                            <td className="version">
                              {moveDetails.version_group.name}
                            </td>
                          </tr>
                        </>
                      ))}
                  </td>
                </tr>
              ))}
        </table>
      </div>
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
    background-color: black;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }

  h2 {
    color: white;
    font-size: 10rem;
    text-transform: capitalize;
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

  .forward-back-button-container {
    margin-top: 1rem;

    button {
      color: transparent;
      outline: none;
      border: none;
      margin: 0rem 0.5rem;
      cursor: pointer;

      img {
        filter: invert(1);
        background: white;
      }
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

  .move-container {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media (max-width: 1700px) {
      width: 50%;
    }

    h3 {
      color: white;
      width: 100%;
      text-transform: uppercase;
      margin: 1rem 0rem;
      margin: 2rem 0rem;
    }

    .move-table {
      margin: 2rem 0rem;
      width: 50%;
      color: white;
      background: rgba(256, 256, 256, 0.1);

      th {
        color: white;
      }

      .move-header {
        padding: 1rem 0rem;
        background: #88888878;
      }

      .level-method-version-header {
        background: #88888878;
        padding: 1rem 0rem;
        display: flex;
        justify-content: center;

        .inner-heading {
          width: 33%;
        }
      }

      .own-move {
        .own-move-title {
          padding: 1rem 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          text-transform: capitalize;
          font-weight: 900;
        }

        .table-row-container {
          display: block;
          width: 100%;
        }

        .level-learned,
        .learn-method,
        .version {
          padding: 0.25rem;
          text-align: center;
          width: 33%;
          display: inline-block;
        }
      }
    }
  }
`;

export default InnerDetails;
