import React, { useState, useEffect } from 'react';
// Styled components
import styled, { ThemeProvider } from 'styled-components';
// Redux
import { useSelector } from 'react-redux';
// Util
import {
  convertToTypeImage,
  convertToTypeBackground,
  convertTypeToColor,
} from '../util';

const PokemonCard = ({ pokemonId, cardFlipHandler }) => {
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

  // Styled component variables
  const theme = {
    background: convertTypeToColor(selectedPokemon[0].types[0].type.name),
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledPokemonCard
        // type={selectedPokemon[0].types[0].type.name}
        className="pokemon-card"
      >
        <div
          className="detailed-pokemon-card"
          onClick={cardFlipHandler}
          onKeyPress={cardFlipHandler}
          role="button"
          tabIndex="0"
        >
          <div className="inner-content">
            <div className="title-health-type-container">
              <h2 className="pokemon-card-title">{selectedPokemon[0].name}</h2>
              <div className="health-type-container">
                <p className="hp">{selectedPokemon[0].stats[0].base_stat} HP</p>
                {selectedPokemon[0].types.map((type) => (
                  <div key={type}>{convertToTypeImage(type.type.name)}</div>
                ))}
              </div>
            </div>
            <div className="card-upper">
              <div className="background-image-container">
                {convertToTypeBackground(selectedPokemon[0].types[0].type.name)}
                <img
                  className="pokemon-card-image-official"
                  src={
                    Object.values(selectedPokemon[0].sprites.other)[1]
                      .front_default
                  }
                  alt={selectedPokemon[0].name}
                />
                <div className="genus-height-weight-container">
                  <p>{`${selectedPokemon2[0].genera[7].genus},`}</p>
                  {/* Height and weight are the wrong way around in the api data */}
                  <p>{`Height: ${selectedPokemon[0].weight}cm,`}</p>
                  <p>{`Weight: ${selectedPokemon[0].height}kgs`}</p>
                </div>
              </div>
            </div>
            <div className="card-lower">
              <div className="move-container">
                <>
                  <div className="move">
                    <p className="move-title">
                      {selectedPokemon[0].moves[0].move.name}
                    </p>
                  </div>
                  <div className="move">
                    <p className="move-title">
                      {selectedPokemon[0].moves[1].move.name}
                    </p>
                  </div>
                  <div className="move">
                    <p className="move-title">
                      {selectedPokemon[0].moves[2].move.name}
                    </p>
                  </div>
                </>
                {/* {selectedPokemon[0].moves.map((move) => (
                <div className="move">
                  <p className="move-title">{move.move.name}</p>
                  <br />
                </div>
              ))} */}
              </div>
              <div className="description">
                <p>
                  {selectedPokemon2[0].flavor_text_entries[0].flavor_text}
                  {/* {JSON.parse(
                    selectedPokemon2[0].flavor_text_entries[0].flavor_text
                  )} */}
                </p>
              </div>
            </div>
            <div className="id-container">
              <p className="id">{selectedPokemon[0].id}/151</p>
              <d className="circle" />
            </div>
          </div>
        </div>
      </StyledPokemonCard>
    </ThemeProvider>
  );
};

// Styled components
const StyledPokemonCard = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
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

    @media (max-width: 1500px) {
      width: 500px;
      height: 696px;
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

    @media (max-width: 1500px) {
      height: 304px;
    }

    .background-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 150px;
      width: 150px;
      background: #ffffffa3;
      border-radius: 50%;
      z-index: 1;
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
    .pokemon-card-image-default {
      height: 350px;
      padding: 1rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;

      @media (max-width: 1500px) {
        height: 304px;
      }
    }
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
          padding: 1rem 0rem;

          @media (max-width: 1700px) {
            margin: 1rem;
          }
        }
      }
    }

    .description {
      border: 2px solid #ffff7a;
      padding: 0.25rem;
    }
  }
`;

export default PokemonCard;
