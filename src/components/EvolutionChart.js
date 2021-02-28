import React, { useEffect, useState } from 'react';
// Styled components
import styled from 'styled-components';
// Axios
import axios from 'axios';
// Util
import { convertTypeToColor } from '../util';
// Images
import ash from '../img/pokemon-ash.png';
import rightArrow from '../img/right-arrow.svg';

const EvolutionChart = ({ pokemonData, selectedPokemon2 }) => {
  // State
  const [evolutionData, setEvolutionData] = useState();
  const [baseStage, setBaseStage] = useState();
  const [firstEvolution, setFirstEvolution] = useState();
  const [secondEvolution, setSecondEvolution] = useState();
  const [ashExtraSmall, setAshExtraSmall] = useState(false);

  // Get evolution data
  useEffect(() => {
    axios
      .get(selectedPokemon2[0].evolution_chain.url)
      .then((response) => {
        // debugger;
        // handle success
        console.log('response', response);
        setEvolutionData(response.data.chain.evolves_to);

        let baseStageName = response.data.chain.species.name;
        let firstEvolutionName =
          response.data.chain.evolves_to.length > 0
            ? response.data.chain.evolves_to[0].species.name
            : '';
        let secondEvolutionName;

        if (typeof response.data.chain.evolves_to[0] !== 'undefined') {
          if (
            typeof response.data.chain.evolves_to[0].evolves_to[0] !==
            'undefined'
          ) {
            secondEvolutionName =
              response.data.chain.evolves_to[0].evolves_to[0].species.name;
          }
        } else {
          secondEvolutionName = '';
        }

        // Manual overrides
        // Handle cases where a base pokemon is outside of gen1
        if (selectedPokemon2[0].name === 'hitmonchan') {
          baseStageName = selectedPokemon2[0].name;
          firstEvolutionName = '';
        }
        if (selectedPokemon2[0].name === 'flareon') {
          baseStageName = 'eevee';
          firstEvolutionName = 'flareon';
        }
        if (selectedPokemon2[0].name === 'jolteon') {
          baseStageName = 'eevee';
          firstEvolutionName = 'jolteon';
        }

        setAshExtraSmall(false);

        // Enable ash height decrease for extra tall pokemon
        if (baseStageName === 'onix' || firstEvolutionName === 'gyarados') {
          setAshExtraSmall(true);
        }

        // Debugging checks
        console.log('--------------------------------------------');
        console.log('baseStageName', baseStageName);
        console.log('firstEvolutionName', firstEvolutionName);
        console.log('secondEvolutionName', secondEvolutionName);
        console.info('pokemonData', pokemonData);
        console.info(
          'baseStage',
          pokemonData.filter((pokemon) => pokemon.name === baseStageName)
        );
        console.info(
          'firstEvolution',
          pokemonData.filter((pokemon) => pokemon.name === firstEvolutionName)
        );
        console.info(
          'secondEvolution',
          pokemonData.filter((pokemon) => pokemon.name === secondEvolutionName)
        );

        // debugger;

        setBaseStage(
          pokemonData.filter((pokemon) => pokemon.name === baseStageName)
        );
        setFirstEvolution(
          pokemonData.filter((pokemon) => pokemon.name === firstEvolutionName)
        );
        setSecondEvolution(
          pokemonData.filter((pokemon) => pokemon.name === secondEvolutionName)
        );
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }, [selectedPokemon2]);

  return (
    <StyledEvolutionChart className="evolution-chart-container">
      {/* <h3>Evolution chart</h3> */}
      <div className="evolution-chart">
        {/* <div className="background-image-container">
          {convertToTypeBackground(selectedPokemon[0].types[0].type.name)}
        </div> */}
        {baseStage && baseStage.length > 0 && (
          <div className="evolution-card">
            <div className="image-container">
              <img
                src={
                  baseStage && baseStage.length > 0
                    ? Object.values(baseStage[0].sprites.other)[1].front_default
                    : ''
                }
                style={{
                  height:
                    baseStage[0].name === 'onix' ||
                    baseStage[0].name === 'magikarp'
                      ? `${baseStage[0].height * 8.5}px`
                      : `${baseStage[0].height * 25.5}px`,
                }}
                alt="base evolution"
              />
              {evolutionData && firstEvolution && firstEvolution.length > 0 && (
                <div className="right-arrow-container">
                  <img src={rightArrow} alt="right arrow" />
                  {/* First evolution level */}
                  {evolutionData[0] &&
                    evolutionData[0].evolution_details[0].min_level && (
                      <p className="first-evolution-level">
                        Lvl {evolutionData[0].evolution_details[0].min_level}
                      </p>
                    )}
                  {/* First evolution item (stone) */}
                  {evolutionData[0] &&
                    evolutionData[0].evolution_details[0].item && (
                      <p className="first-evolution-level">
                        {evolutionData[0].evolution_details[0].item.name}
                      </p>
                    )}
                </div>
              )}
            </div>
            <div className="name-type-container">
              <p className="base-stage-name">{baseStage[0].name}</p>
              {baseStage[0].types.map((type) => (
                <p
                  key={type.type.name}
                  style={{
                    background: convertTypeToColor(type.type.name),
                  }}
                  className="evolution-type"
                >
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>
        )}
        {firstEvolution && firstEvolution.length > 0 && (
          <div className="evolution-card">
            <div className="image-container">
              <img
                src={
                  firstEvolution && firstEvolution.length > 0
                    ? Object.values(firstEvolution[0].sprites.other)[1]
                        .front_default
                    : ''
                }
                style={{
                  height:
                    firstEvolution[0].name === 'gyarados'
                      ? `${firstEvolution[0].height * 8.5}px`
                      : `${firstEvolution[0].height * 25.5}px`,
                  marginBottom:
                    firstEvolution[0].name === 'gyarados' ? '-4.5rem' : '',
                }}
                alt="first evolution"
              />
              {/* Second evolution level */}
              {secondEvolution && secondEvolution.length > 0 && (
                <div className="right-arrow-container">
                  <img src={rightArrow} alt="right arrow" />
                  {/* Second evolution level */}
                  {evolutionData[0] &&
                    evolutionData[0].evolves_to[0] &&
                    evolutionData[0].evolves_to[0].evolution_details[0] &&
                    evolutionData[0].evolves_to[0].evolution_details[0]
                      .min_level !== null && (
                      <p className="second-evolution-level">
                        {`Lvl ${evolutionData[0].evolves_to[0].evolution_details[0].min_level}`}
                      </p>
                    )}
                  {/* Second evolution item (stone) */}
                  {evolutionData[0] &&
                    evolutionData[0].evolves_to[0].evolution_details[0]
                      .item && (
                      <p className="second-evolution-level">
                        {
                          evolutionData[0].evolves_to[0].evolution_details[0]
                            .item.name
                        }
                      </p>
                    )}
                  {/* Second evolution trigger (trade) */}
                  {/* {!evolutionData[0].evolves_to[0].evolution_details[0]
                    .min_level &&
                    !evolutionData[0].evolves_to[0].evolution_details[0].item &&
                    evolutionData[0].evolves_to[0].evolution_details[0]
                      .trigger && (
                      <p className="second-evolution-level">
                        {
                          evolutionData[0].evolves_to[0].evolution_details[0]
                            .trigger.name
                        }
                      </p>
                    )} */}
                </div>
              )}
            </div>
            <div className="name-type-container">
              <p className="first-evolution-name">{firstEvolution[0].name}</p>
              {firstEvolution[0].types.map((type) => (
                <p
                  key={type.type.name}
                  style={{
                    background: convertTypeToColor(type.type.name),
                  }}
                  className="evolution-type"
                >
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>
        )}
        {secondEvolution && secondEvolution.length > 0 && (
          <div className="evolution-card">
            <img
              src={
                secondEvolution && secondEvolution.length > 0
                  ? Object.values(secondEvolution[0].sprites.other)[1]
                      .front_default
                  : ''
              }
              style={{
                height: `${secondEvolution[0].height * 25}px`,
                marginBottom:
                  secondEvolution[0].name === 'charizard' ||
                  secondEvolution[0].name === 'venusaur' ||
                  secondEvolution[0].name === 'poliwrath' ||
                  secondEvolution[0].name === 'nidoking'
                    ? '-4.5rem'
                    : '',
              }}
              alt="second evolution"
            />
            <div className="name-type-container">
              <p className="second-evolution-name">{secondEvolution[0].name}</p>
              {secondEvolution[0].types.map((type) => (
                <p
                  key={type.type.name}
                  style={{
                    background: convertTypeToColor(type.type.name),
                  }}
                  className="evolution-type"
                >
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>
        )}
        <div className="evolution-card">
          <img
            src={ash}
            style={{
              height: ashExtraSmall ? '126px' : '378px',
              filter: 'brightness(0)',
            }}
            alt="trainer"
          />
          <div className="name-type-container">
            <p className="trainer-name">Ash</p>
          </div>
        </div>
      </div>
    </StyledEvolutionChart>
  );
};

// Styled components
const StyledEvolutionChart = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  h3 {
    color: white;
    width: 100%;
    text-transform: uppercase;
    margin: 1rem 0rem;
    margin: 2rem 0rem;
  }

  .evolution-chart {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 0rem 2rem 2rem 0rem;
    padding: 3rem;
    margin: 2rem 0rem;
    background: rgba(256, 256, 256, 0.7);

    .evolution-card {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      height: 100%;
      margin: 0rem 1rem;
      max-width: 20%;
    }

    .image-container {
      position: relative;

      img {
        width: auto;
      }

      .right-arrow-container {
        position: absolute;
        right: -100px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;

        img {
          width: 100px;
        }

        p {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 20px;
          font-weight: 900;
          font-size: 1.5rem;
        }
      }
    }

    .name-type-container {
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: center;
      height: 140px;
      margin-top: 1rem;

      .base-stage-name,
      .first-evolution-name,
      .second-evolution-name,
      .trainer-name {
        margin: 0.25rem 0rem;
        border-radius: 2rem;
        text-align: center;
        width: 80%;
        font-family: 'Bebas Neue', cursive;
        text-transform: uppercase;
        font-size: 1.5rem;
        color: black;
        letter-spacing: 0.25rem;
      }

      .evolution-type {
        margin: 0.25rem 0rem;
        border-radius: 2rem;
        text-align: center;
        width: 200px;
        font-family: 'Bebas Neue', cursive;
        text-transform: uppercase;
        font-size: 1.25rem;
        color: black;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

export default EvolutionChart;
