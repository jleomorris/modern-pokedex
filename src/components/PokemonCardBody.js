import React, { useState, useEffect } from 'react';
// Styled components
import styled, { ThemeProvider } from 'styled-components';
// Redux
import { useSelector } from 'react-redux';
import '../../node_modules/video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
// Components
import DynamicSprite from './DynamicSprite';
// Util
import {
  convertToTypeImage,
  convertToTypeBackground,
  convertTypeToColor,
  removeNonAscii,
} from '../util';

const PokemonCardBody = ({
  pathId,
  cardFlipHandler,
  isDreamWorldSelected,
  isDefaultSelected,
  isOfficialSelected,
  isShinySelected,
  isShinyAnimatedSelected,
  isBlackAndWhiteAnimatedSelected,
  is3dSelected,
}) => {
  // Redux
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  // State
  const [pokemonId, setPokemonId] = useState(pathId);
  const [selectedPokemon, setSelectedPokemon] = useState(
    pokemonData.filter((pokemon) => pokemon.id.toString() === pokemonId)
  );
  const [cardDescriptions, setCardDescriptions] = useState();
  const [windowWidth, setWindowWidth] = useState();
  const [onMobile, setOnMobile] = useState(false);
  // Styled component variables
  const theme = {
    background: convertTypeToColor(selectedPokemon[0].types[0].type.name),
  };

  // Setup monitoring of window size
  useEffect(() => {
    console.log(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      console.log(window.innerWidth);
      setWindowWidth(window.innerWidth);
    });
  }, []);

  // Hide card when under a certain width
  useEffect(() => {
    if (windowWidth < 1500) {
      setOnMobile(true);
    } else {
      setOnMobile(false);
    }
  }, [windowWidth]);

  // When pokemon id changes reset selected pokemon
  useEffect(() => {
    setSelectedPokemon(
      pokemonData.filter((pokemon) => pokemon.id.toString() === pokemonId)
    );
  }, [pokemonId]);

  // Re set pokemon id when path id changes
  useEffect(() => {
    setPokemonId(pathId);
  }, [pathId]);

  //
  useEffect(() => {
    const engDescriptions = selectedPokemon[0].flavor_text_entries.filter(
      (entry) => entry.language.name === 'en'
    );

    setCardDescriptions(engDescriptions);
  }, [selectedPokemon]);

  return (
    <ThemeProvider theme={theme}>
      {onMobile && (
        <StyledPokemonCardBody className="pokemon-card-body">
          <div
            className="detailed-pokemon-card"
            onClick={cardFlipHandler}
            onKeyPress={cardFlipHandler}
            role="button"
            tabIndex="0"
          >
            <div className="click-message">
              <p>Click card to flip</p>
            </div>
            <div className="inner-content">
              <div className="title-health-type-container">
                <h2 className="pokemon-card-title">
                  {selectedPokemon[0].name}
                </h2>
                <div className="health-type-container">
                  <p className="hp">
                    {selectedPokemon[0].stats[0].base_stat} HP
                  </p>
                  {selectedPokemon[0].types.map((type) => (
                    <div key={type.type.name}>
                      {convertToTypeImage(type.type.name)}
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-upper">
                <div className="background-image-container">
                  {convertToTypeBackground(
                    selectedPokemon[0].types[0].type.name
                  )}
                  {/* {convertNameToSpriteAnimation(selectedPokemon[0].name)} */}
                  {!isBlackAndWhiteAnimatedSelected && (
                    <img
                      className={`${
                        isDreamWorldSelected
                          ? 'pokemon-card-image-dream-world'
                          : ''
                      } ${
                        isOfficialSelected ? 'pokemon-card-image-official' : ''
                      } ${
                        isDefaultSelected ? 'pokemon-card-image-default' : ''
                      } ${isShinySelected ? 'pokemon-card-image-shiny' : ''}`}
                      src={
                        isDreamWorldSelected
                          ? selectedPokemon[0].sprites.other.dream_world
                              .front_default
                          : '' || isOfficialSelected
                          ? Object.values(selectedPokemon[0].sprites.other)[1]
                              .front_default
                          : '' || isDefaultSelected
                          ? selectedPokemon[0].sprites.front_default
                          : '' || isShinySelected
                          ? selectedPokemon[0].sprites.front_shiny
                          : ''
                      }
                      alt={selectedPokemon[0].name}
                    />
                  )}
                  {isBlackAndWhiteAnimatedSelected && (
                    <DynamicSprite
                      id={selectedPokemon[0].id}
                      type="black and white"
                    />
                  )}
                  {isShinyAnimatedSelected && (
                    <DynamicSprite id={selectedPokemon[0].id} type="shiny" />
                  )}
                  {is3dSelected && (
                    <DynamicSprite
                      id={6}
                      type="3d"
                      name={selectedPokemon[0].name}
                    />
                  )}
                  <div className="genus-height-weight-container">
                    <p>{`${selectedPokemon[0].genera[7].genus},`}</p>
                    <p>{`Height: ${(selectedPokemon[0].height * 0.33).toFixed(
                      2
                    )}ft,`}</p>
                    <p>{`Weight: ${(selectedPokemon[0].weight * 0.22).toFixed(
                      2
                    )}lbs`}</p>
                  </div>
                </div>
              </div>
              <div className="card-lower">
                <div className="move-container">
                  {selectedPokemon[0].moves.map((move) => (
                    <div className="move" key={move.move.name}>
                      <p className="move-title">{move.move.name}</p>
                    </div>
                  ))}
                </div>
                <div className="card-description">
                  <p>
                    {cardDescriptions &&
                      removeNonAscii(cardDescriptions[0].flavor_text)}
                  </p>
                </div>
              </div>
              <div className="id-container">
                <p className="id">{selectedPokemon[0].id}/151</p>
                <div className="circle" />
              </div>
            </div>
          </div>
        </StyledPokemonCardBody>
      )}
    </ThemeProvider>
  );
};

// Styled components
const StyledPokemonCardBody = styled.div`
  /* position: absolute;
  top: 0px;
  left: -75px; */
  z-index: 3;
  display: flex;
  justify-content: start;
  align-items: start;

  .detailed-pokemon-card {
    width: 575px;
    height: 800px;
    border-radius: 1.55rem;
    background: rgba(256, 256, 256, 1);
    margin: 2rem -4rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.4);
    background: #ffff7a;
    outline: none;
    position: relative;

    @media (max-width: 1600px) {
      width: 500px;
      height: 696px;
    }

    .click-message {
      position: absolute;
      padding: 2rem;
      bottom: -100px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      border-radius: 4rem;
      box-shadow: 0px 0px 10px white;
      height: 150px;
      width: 150px;
      z-index: -1;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      cursor: auto;

      p {
        font-family: 'Bebas Neue', cursive;
        font-size: 1.5rem;
        text-align: center;
        color: white;
      }
    }

    .inner-content {
      // Conditional background styling based on pokemon type
      background: ${(props) => (props ? props.theme.background : 'white')};
      margin: 1.5rem;
      padding: 0.5rem 0rem;
      height: 94%;
      position: relative;

      .id-container {
        position: absolute;
        bottom: 5px;
        right: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          color: black;
        }

        .circle {
          background: black;
          border-radius: 50%;
          height: 10px;
          width: 10px;
          margin-left: 5px;
        }
      }
    }

    .title-health-type-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.5rem;

      .pokemon-card-title {
        color: black;
        text-transform: capitalize;
        font-size: 2rem;
        /* font-family: 'Bebas Neue', cursive; */
        /* letter-spacing: 0.25rem; */
        margin-left: 3rem;
      }
    }

    .health-type-container {
      display: flex;
      justify-content: center;
      align-items: center;

      .hp {
        margin-right: 20px;
        font-size: 2rem;
        font-weight: 900;
        align-self: center;
        color: red;
      }

      img {
        width: 50px;
        margin-left: -20px;
        height: 50px;
        width: 50px;
      }
    }
  }

  .card-upper {
    height: 350px;
    margin: 0rem 2rem;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    position: relative;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);

    @media (max-width: 1600px) {
      height: 304px;
    }

    .background-image-container {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border: 12px solid #ffff7a;
      box-shadow: 10px 10px 20px black;

      .genus-height-weight-container {
        background: #ffff7a;
        display: flex;
        justify-content: space-around;
        font-weight: 700;
        font-style: italic;
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;

        p {
          color: black;
        }
      }
    }

    .background-image {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .attack {
      position: absolute;
      top: -25px;
      left: -5px;
      font-size: 2rem;
      background: red;
      border: 2px solid black;
      padding: 0.5rem;
      border-radius: 1rem;
    }

    .name-container {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-top: 3rem;

      .pokemon-card-title {
        text-align: center;
        text-transform: capitalize;
        font-size: 2rem;
        color: white;
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 0.25rem;
        z-index: 2;
        text-shadow: 0px 5px 30px white;
      }
    }

    .pokemon-card-image-dream-world,
    .pokemon-card-image-official,
    .pokemon-card-image-default,
    .pokemon-card-image-shiny {
      height: 350px;
      width: 350px;
      padding: 1rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      object-fit: contain;

      @media (max-width: 1600px) {
        height: 304px;
      }
    }
  }

  .default-sprite-animation,
  .shiny-sprite-animation {
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .sprite-animation-3d {
    height: 125px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .card-lower {
    height: 270px;
    overflow: hidden;
    margin: 2rem;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1500px) {
      height: 234.8px;
    }

    .move-container {
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: column;
      overflow: hidden;

      .move {
        width: 100%;
        text-align: center;
        border-bottom: 2px solid black;

        .move-title {
          font-size: 1.5rem;
          text-transform: capitalize;
          font-weight: bolder;
          padding: 1.2rem 0rem;
          color: black;

          @media (max-width: 1700px) {
            margin: 1rem;
          }

          @media (max-width: 1500px) {
            margin: 0.5rem;
          }
        }
      }
    }

    .card-description {
      border: 2px solid #ffff7a;
      padding: 0.25rem;

      p {
        color: black;
      }
    }
  }
`;

export default PokemonCardBody;
