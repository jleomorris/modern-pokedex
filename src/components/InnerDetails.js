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
import ash from '../img/pokemon-ash.png';
// Util
import { convertTypeToColor } from '../util';

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

  useEffect(async () => {
    const allAbilityData = [];

    if (selectedPokemon.length > 0) {
      for (let i = 0; i < selectedPokemon[0].abilities.length; i += 1) {
        // debugger;
        const eachAbilitiesData = await axios.get(
          selectedPokemon[0].abilites[i].ability.url
        );
        allAbilityData.push(eachAbilitiesData);
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
      <div className="abilities-container">
        {selectedPokemon[0].abilities.map((ability) => (
          <div
            key={ability.ability.name}
            className="ability"
            style={{
              background: convertTypeToColor(
                selectedPokemon[0].types[0].type.name
              ),
            }}
          >
            <p className="ability-title">{ability.ability.name}</p>
            <p className="ability-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              illum ea suscipit pariatur modi nemo laborum aliquam laudantium
              non beatae.
            </p>
          </div>
        ))}
      </div>
      <div className="evolution-chart-container">
        <h3>Evolution chart</h3>
        <div className="evolution-chart">
          {baseStage && baseStage.length > 0 && (
            <div className="evolution-card">
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
                alt="first evolution"
              />
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
                }}
                alt="first evolution"
              />
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
                <p className="second-evolution-name">
                  {secondEvolution[0].name}
                </p>
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
      </div>
      <div className="move-container">
        <h3>Own moves & level learned</h3>
        {ownMoves &&
          ownMoves.map((move) => (
            <div className="own-move" key={move.move.name}>
              <p className="own-move-title">{move.move.name}</p>
              <p className="level-learned">
                Lvl.
                {move.version_group_details[0].level_learned_at}
              </p>
              <br />
            </div>
          ))}
        <h3>Can learn</h3>
        {learnableMoves &&
          learnableMoves.map((move) => (
            <div className="can-learn" key={move.move.name}>
              <p className="can-learn-title">{move.move.name}</p>
            </div>
          ))}
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

  .abilities-container {
    width: 70%;
    border: 2px solid red;
    padding: 2rem;
    margin: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .ability {
      border-radius: 1rem;
      padding: 1rem;
      margin: 0rem 1rem;

      .ability-title {
        text-transform: capitalize;
        font-weight: 900;
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
        text-shadow: 0px 0px 5px black;
      }

      .ability-description {
        color: black;
      }
    }
  }

  .evolution-chart-container {
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

      img {
        width: auto;
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
  }

  .move-container {
    width: 70%;
    display: flex;
    flex-wrap: wrap;

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

    .own-move {
      margin: 1rem;
      margin: 1rem;
      background: rgba(256, 256, 256, 0.3);
      border-radius: 2rem;
      padding: 2rem;
      position: relative;
    }

    .can-learn {
      margin: 1rem;
      margin: 1rem;
      background: rgba(256, 256, 256, 0.3);
      border-radius: 2rem;
      padding: 1rem;
      position: relative;
    }

    .level-learned {
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      padding: 1rem;
      border-radius: 1rem;
      color: black;
      padding: 1rem 1.2rem;
    }
  }
`;

export default InnerDetails;
