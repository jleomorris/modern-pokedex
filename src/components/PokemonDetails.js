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
// Util
import { convertTypeToColor, convertToTypeImage } from '../util';
// Images
import cardBack from '../img/card_back.png';

const PokemonDetails = ({
  pathId,
  isOfficialSelected,
  isDreamWorldSelected,
  isDefaultSelected,
}) => {
  // React Router
  const history = useHistory();
  // Redux
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  const pokemonData2 = useSelector((state) => state.pokemon.pokemonData2);
  const typeData = useSelector((state) => state.types.typeData);
  // State
  const [pokemonId, setPokemonId] = useState(pathId);
  // SelectedPokemon 1 and 2 are based off 2 separate stores of data, from 2 different API calls
  const [selectedPokemon, setSelectedPokemon] = useState(
    pokemonData.filter((pokemon) => pokemon.id.toString() === pokemonId)
  );
  const [selectedPokemon2, setSelectedPokemon2] = useState(
    pokemonData2.filter((pokemon) => pokemon.id.toString() === pokemonId)
  );
  const [isFlipped, setisFlipped] = useState(false);
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

  // When pokemon id changes reset selected pokemon
  useEffect(() => {
    setSelectedPokemon(
      pokemonData.filter((pokemon) => pokemon.id.toString() === pokemonId)
    );
    setSelectedPokemon2(
      pokemonData2.filter((pokemon) => pokemon.id.toString() === pokemonId)
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

  const cardFlipHandler = (e) => {
    e.preventDefault();
    setisFlipped((prev) => !prev);
  };

  const typeStrengthsHandler = () => {
    const currentCardTypes = selectedPokemon[0].types;
    const strongAgainst = [];
    console.log('typeData', typeData);

    currentCardTypes.forEach((type) => {
      const filteredTypeData = typeData.filter(
        (data) => data.name === type.type.name
      );

      filteredTypeData[0].damage_relations.double_damage_to.forEach(
        (typeStrongAgainst) => {
          strongAgainst.push(typeStrongAgainst.name);
        }
      );
    });

    return strongAgainst;
  };

  const typeWeaknessessHandler = () => {
    const currentCardTypes = selectedPokemon[0].types;
    const weakAgainst = [];
    console.log('typeData', typeData);

    currentCardTypes.forEach((type) => {
      const filteredTypeData = typeData.filter(
        (data) => data.name === type.type.name
      );

      filteredTypeData[0].damage_relations.double_damage_from.forEach(
        (typeWeakAgainst) => {
          weakAgainst.push(typeWeakAgainst.name);
        }
      );
    });

    return weakAgainst;
  };

  return (
    <ThemeProvider theme={theme}>
      <DetailsShadow className="details-shadow" onClick={exitDetailHandler}>
        <div className="exit-message">
          <p>Click blurred area to exit</p>
        </div>
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
                pathId={pokemonId}
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
                <img className="back-image" src={cardBack} alt="card-back" />
                <div className="strength-weakness-container">
                  <div className="strengths">
                    <h2>Strong against</h2>
                    {typeData && typeStrengthsHandler().length === 0 && (
                      <p className="none-message">None</p>
                    )}
                    {typeData &&
                      typeStrengthsHandler().map((strongAgainst) =>
                        convertToTypeImage(strongAgainst)
                      )}
                  </div>
                  <div className="weaknesses">
                    <h2>Weak against</h2>
                    {typeData && typeWeaknessessHandler().length === 0 && (
                      <p className="none-message">None</p>
                    )}
                    {typeData &&
                      typeWeaknessessHandler().map((weakAgainst) =>
                        convertToTypeImage(weakAgainst)
                      )}
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          )}
          <InnerDetails
            selectedPokemon={selectedPokemon}
            selectedPokemon2={selectedPokemon2}
            setPokemonId={setPokemonId}
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

  @media (max-width: 1000px) {
    width: 80%;
  }

  .react-card-flip {
    position: absolute;
    top: 130px;
    left: 0px;
    z-index: 3 !important;
    cursor: pointer;
  }

  .card-back {
    position: absolute;
    top: 0px;
    left: -75px;
    outline: none;

    .strength-weakness-container {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translate(-50%, -50%);
      width: 100%;
      height: 50%;
      /* margin-top: 6rem; */
      /* background: rgba(0,0,0,0.6); */
      border-radius: 2rem;
      padding: 3rem;

      .strengths,
      .weaknesses {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .none-message {
          font-size: 1.5rem;
          color: white;
        }

        h2 {
          font-size: 2rem;
          color: white;
          margin: 1rem 0rem;
          width: 100%;
          text-align: center;
          text-shadow: 0px 5px 5px black;
        }

        .type-symbol {
          width: 60px;
          height: 60px;
          filter: drop-shadow(2px 4px 6px black);
        }
      }
    }

    .back-image {
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

export default PokemonDetails;
