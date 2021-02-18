import React from 'react';
// Styled components
import styled from 'styled-components';
// Images
import forwardArrow from '../img/icons8-forward-arrow-50.png';
import backArrow from '../img/icons8-reply-arrow-50.png';
// Util
import { convertTypeToColor } from '../util';

const InnerDetails = ({
  selectedPokemon,
  selectedPokemon2,
  setPokemonId,
  ownMoves,
  learnableMoves,
}) => {
  return (
    <StyledInnerDetails className="inner-details">
      {/* <h2 className="feature-title">{selectedPokemon[0].name}</h2> */}
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
    font-size: 6rem;
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
      margin: 0.5rem;
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
    font-size: 11rem;
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
  }

  .move-container {
    width: 55%;
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
