import React, { useState, useEffect } from 'react';
// Styled components
import styled, { ThemeProvider } from 'styled-components';
// React Router
import { useHistory } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Components
import ReactCardFlip from 'react-card-flip';
import PokemonCard from './PokemonCard';
// Util
import { convertTypeToColor } from '../util';
// Images
import cardBack from '../img/card_back.png';

const PokemonDetails = ({
  pokemonId,
  isOfficialSelected,
  isDreamWorldSelected,
  isDefaultSelected,
}) => {
  // React Router
  const history = useHistory();
  // Redux
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  const pokemonData2 = useSelector((state) => state.pokemon.pokemonData2);
  // State
  // SelectedPokemon 1 and 2 are based off 2 separate stores of data, from 2 different API calls
  const [selectedPokemon, setSelectedPokemon] = useState(
    pokemonData.filter((pokemon) => pokemon.id.toString() === pokemonId)
  );
  const [selectedPokemon2, setSelectedPokemon2] = useState(
    pokemonData2.filter((pokemon) => pokemon.id.toString() === pokemonId)
  );
  const [isFlipped, setisFlipped] = useState(false);
  const [ownMoves, setOwnMoves] = useState();
  const [learnableMoves, setLearnableMoves] = useState();

  // Styled component variables
  const theme = {
    background: convertTypeToColor(selectedPokemon[0].types[0].type.name),
  };

  // Automate card flip
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setisFlipped((prev) => !prev);
    }, 1750);
    setTimeout(() => {
      setisFlipped((prev) => !prev);
    }, 1000);
  }, []);

  // Set up own moves and learnable moves
  useEffect(() => {
    const allMoves = selectedPokemon[0].moves.map((move) => move);
    const filteredOwnMoves = allMoves.filter(
      (move) => move.version_group_details[0].level_learned_at !== 0
    );
    const filteredLearnableMoves = allMoves.filter(
      (move) => move.version_group_details[0].level_learned_at === 0
    );

    setOwnMoves(filteredOwnMoves);
    setLearnableMoves(filteredLearnableMoves);
  }, [selectedPokemon]);

  const exitDetailHandler = (e) => {
    const element = e.target;
    // console.log(element);

    if (element.classList.contains('details-shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/pokemon');
    }
  };

  const cardFlipHandler = (e) => {
    e.preventDefault();
    setisFlipped((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <DetailsShadow className="details-shadow" onClick={exitDetailHandler}>
        <StyledPokemonDetails className="pokemon-details">
          {selectedPokemon && selectedPokemon2 && (
            <ReactCardFlip
              className="react-card-flip"
              isFlipped={isFlipped}
              flipDirection="horizontal"
              infinite
              flipSpeedBackToFront="0.5"
              flipSpeedFrontToBack="0.5"
            >
              <PokemonCard
                key="front"
                pokemonId={pokemonId}
                cardFlipHandler={cardFlipHandler}
                isDefaultSelected={isDefaultSelected}
                isDreamWorldSelected={isDreamWorldSelected}
                isOfficialSelected={isOfficialSelected}
              />
              <div
                className="card-back"
                key="back"
                onClick={cardFlipHandler}
                onKeyPress={cardFlipHandler}
                role="button"
                tabIndex="0"
              >
                <img src={cardBack} alt="card-back" />
              </div>
            </ReactCardFlip>
          )}
          <InnerDetails className="inner-details">
            {/* <h2 className="feature-title">{selectedPokemon[0].name}</h2> */}
            <h2 className="feature-title">
              {selectedPokemon2[0].genera[8].genus}
            </h2>
            <p className="legendary-tag">
              {selectedPokemon2[0].is_legendary ? 'Legendary' : ''}
            </p>
            <h2 className="pokemon-card-title">{selectedPokemon[0].name}</h2>
            <div className="type">
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
          </InnerDetails>
        </StyledPokemonDetails>
      </DetailsShadow>
    </ThemeProvider>
  );
};

// Styled components
const DetailsShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  filter: blur(0px);
  display: flex;
  justify-content: flex-end;

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
  background: rgba(0, 0, 0, 1);
  height: 120vh;
  width: 80%;
  position: relative;
  z-index: 3;

  @media (max-width: 1000px) {
    width: 80%;
  }

  .react-card-flip {
    position: absolute;
    top: 100px;
    left: 0px;
    z-index: 3 !important;
  }

  .card-back {
    position: absolute;
    top: 0px;
    left: 0px;
    outline: none;

    img {
      width: 575px;
      height: 800px;
      object-fit: cover;
      margin: 2rem -4rem;

      @media (max-width: 1500px) {
        width: 500px;
        height: 696px;
      }
    }
  }
`;

const InnerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding-top: 7rem;
  padding-right: 1rem;
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

  .legendary-tag {
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    color: gold;
    font-weight: 900;
  }

  .move-container {
    width: 55%;
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0rem;

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

export default PokemonDetails;
