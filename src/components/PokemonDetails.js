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
import InnerDetails from './InnerDetails';
import SpriteGallery from './SpriteGallery';
// Util
import { convertTypeToColor } from '../util';
// Images
import cardBack from '../img/card_back.png';

const PokemonDetails = ({
  pathId,
  isOfficialSelected,
  isDreamWorldSelected,
  isDefaultSelected,
  isShinySelected,
  isShinyAnimatedSelected,
  isBlackAndWhiteAnimatedSelected,
  is3dSelected,
  spriteSelectionHandler,
}) => {
  // React Router
  const history = useHistory();
  // Redux
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  // State
  const [pokemonId, setPokemonId] = useState(pathId);
  const [selectedPokemon, setSelectedPokemon] = useState(
    pokemonData.filter((pokemon) => pokemon.id.toString() === pokemonId)
  );
  const [windowWidth, setWindowWidth] = useState();
  const [onMobile, setOnMobile] = useState(false);
  const [isMainCardFlipped, setIsMainCardFlipped] = useState(false);
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

  // Automate card flip
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setIsMainCardFlipped((prev) => !prev);
    }, 1750);
    setTimeout(() => {
      setIsMainCardFlipped((prev) => !prev);
    }, 1000);
  }, []);

  // When pokemon id changes reset selected pokemon
  useEffect(() => {
    setSelectedPokemon(
      pokemonData.filter((pokemon) => pokemon.id.toString() === pokemonId)
    );
  }, [pokemonId]);

  const exitDetailHandler = (e) => {
    const element = e.target;
    // console.log(element);

    if (element.classList.contains('details-shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/pokemon');
    }
  };

  const mainCardFlipHandler = (e) => {
    // alert('main card flipped');
    // e.preventDefault();
    setIsMainCardFlipped((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <DetailsShadow className="details-shadow" onClick={exitDetailHandler}>
        <div className="exit-message">
          <p>Click blurred area to exit</p>
        </div>
        <StyledPokemonDetails className="pokemon-details">
          {selectedPokemon && !onMobile && (
            <ReactCardFlip
              className="react-card-flip"
              isFlipped={isMainCardFlipped}
              flipDirection="horizontal"
              infinite
              flipSpeedBackToFront="0.5"
              flipSpeedFrontToBack="0.5"
            >
              <PokemonCard
                key="front"
                pathId={pokemonId}
                mainCardFlipHandler={mainCardFlipHandler}
                isDefaultSelected={isDefaultSelected}
                isDreamWorldSelected={isDreamWorldSelected}
                isOfficialSelected={isOfficialSelected}
                isShinySelected={isShinySelected}
                isShinyAnimatedSelected={isShinyAnimatedSelected}
                isBlackAndWhiteAnimatedSelected={
                  isBlackAndWhiteAnimatedSelected
                }
                is3dSelected={is3dSelected}
              />
              <div className="card-back" key="back">
                {/* <button onClick={mainCardFlipHandler} type="button"> */}
                {/* </button> */}
                <img className="back-image" src={cardBack} alt="card-back" />
                <SpriteGallery
                  selectedPokemon={selectedPokemon}
                  spriteSelectionHandler={spriteSelectionHandler}
                  mainCardFlipHandler={mainCardFlipHandler}
                />
              </div>
            </ReactCardFlip>
          )}
          <InnerDetails
            selectedPokemon={selectedPokemon}
            setPokemonId={setPokemonId}
            pathId={pokemonId}
            isDefaultSelected={isDefaultSelected}
            isDreamWorldSelected={isDreamWorldSelected}
            isOfficialSelected={isOfficialSelected}
            isShinySelected={isShinySelected}
            isShinyAnimatedSelected={isShinyAnimatedSelected}
            isBlackAndWhiteAnimatedSelected={isBlackAndWhiteAnimatedSelected}
            is3dSelected={is3dSelected}
            onMobile={onMobile}
          />
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

  .exit-message {
    filter: blur(0);
    position: absolute;
    top: 150px;
    left: 0px;
    background: rgba(0, 0, 0, 0.7);
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 50% 50% 0;
    padding: 2rem 3rem 2rem 1rem;
    cursor: pointer;

    p {
      font-family: 'Bebas Neue', cursive;
      font-size: 1.5rem;
      text-align: center;
      color: white;
    }
  }
`;

const StyledPokemonDetails = styled.div`
  background: rgba(0, 0, 0, 1);
  height: 120vh;
  width: 90%;
  max-width: 2000px;
  position: relative;
  z-index: 3;
  cursor: auto;

  @media (max-width: 1500px) {
    width: 100%;
  }

  .react-card-flip {
    position: absolute;
    top: 95px;
    left: 0px;
    z-index: 3 !important;
    /* cursor: pointer; */
  }

  .card-back {
    position: absolute;
    top: 0px;
    left: -75px;
    outline: none;

    button {
      background: #ffffff00;
      border: none;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }

    .back-image {
      width: 575px;
      height: 800px;
      object-fit: cover;
      margin: 2rem -4rem;
      filter: brightness(0.5);

      @media (max-width: 1500px) {
        width: 500px;
        height: 696px;
      }
    }
  }
`;

export default PokemonDetails;
