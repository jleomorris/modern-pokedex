import React, { useState, useEffect } from 'react';
// Styled components
import styled from 'styled-components';
// Axios
import axios from 'axios';
// React Router
import { useHistory } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Framer motion
import { motion } from 'framer-motion';
// Components
import ReactCardFlip from 'react-card-flip';
import EvolutionChart from './EvolutionChart';
import Abilities from './Abilities';
import ForwardBackButtons from './ForwardBackButtons';
import Moves from './Moves';
import LocationArea from './LocationArea';
import StrengthsWeaknesses from './StrengthsWeaknesses';
import ScrollToTop from './ScrollToTop';
import SpriteGallery from './SpriteGallery';
// Images
import close from '../img/close-button.svg';
import egg from '../img/egg.png';
import training from '../img/training.png';
import PokemonCardBody from './PokemonCardBody';
import cardBack from '../img/card_back.png';
// Animations
import { scrollRevealRight } from '../animation';
// Util
import {
  convertTypeToColor,
  convertToTypeImage,
  removeNonAscii,
} from '../util';

const InnerDetails = ({
  selectedPokemon,
  setPokemonId,
  ownMoves,
  pathId,
  isDefaultSelected,
  isDreamWorldSelected,
  isOfficialSelected,
  isShinySelected,
  isShinyAnimatedSelected,
  isBlackAndWhiteAnimatedSelected,
  is3dSelected,
  onMobile,
}) => {
  // React Router
  const history = useHistory();
  // Redux
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  //   const pokemonData2 = useSelector((state) => state.pokemon.pokemonData2);
  // State
  const [abilityData, setAbilityData] = useState();
  const [description, setDescription] = useState();
  const [isFlipped, setisFlipped] = useState(false);

  // Reset document body overflow on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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

  const cardFlipHandler = (e) => {
    e.preventDefault();
    setisFlipped((prev) => !prev);
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
        <motion.h2
          variants={scrollRevealRight}
          initial="hidden"
          animate="show"
          exit="exit"
          className="pokemon-card-id"
        >
          #{selectedPokemon[0].id}
        </motion.h2>
        <motion.h2
          variants={scrollRevealRight}
          initial="hidden"
          animate="show"
          exit="exit"
          className="pokemon-title"
        >
          {selectedPokemon[0].name}
        </motion.h2>
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
      {selectedPokemon && onMobile && (
        <ReactCardFlip
          className="react-card-flip"
          isFlipped={isFlipped}
          flipDirection="horizontal"
          infinite
          flipSpeedBackToFront="0.5"
          flipSpeedFrontToBack="0.5"
        >
          <PokemonCardBody
            key="front"
            pathId={pathId}
            cardFlipHandler={cardFlipHandler}
            isDefaultSelected={isDefaultSelected}
            isDreamWorldSelected={isDreamWorldSelected}
            isOfficialSelected={isOfficialSelected}
            isShinySelected={isShinySelected}
            isShinyAnimatedSelected={isShinyAnimatedSelected}
            isBlackAndWhiteAnimatedSelected={isBlackAndWhiteAnimatedSelected}
            is3dSelected={is3dSelected}
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
            <SpriteGallery selectedPokemon={selectedPokemon} />
          </div>
        </ReactCardFlip>
      )}
      <Abilities abilityData={abilityData} selectedPokemon={selectedPokemon} />
      <StrengthsWeaknesses selectedPokemon={selectedPokemon} />
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
      <ScrollToTop />
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
  overflow-x: hidden;

  @media (max-width: 1500px) {
    align-items: center;
    padding-right: unset;
  }

  @media (max-width: 800px) {
    padding-top: 3rem;
  }

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

      @media (max-width: 600px) {
        width: 300px;
        top: 0px;
        left: 0px;
      }

      @media (max-width: 400px) {
        width: 150px;
        top: unset;
        left: 0px;
      }
    }
  }

  h2 {
    color: white;
    font-size: 10rem;
    text-transform: capitalize;
    margin-top: 2rem;

    @media (max-width: 800px) {
      font-size: 6rem;
    }

    @media (max-width: 400px) {
      font-size: 3rem;
    }
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

    @media (max-width: 800px) {
      font-size: 5rem;
    }
  }

  .close-button {
    position: absolute;
    top: 115px;
    right: 30px;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 4;

    @media (max-width: 1500px) {
      top: 95px;
    }

    @media (max-width: 800px) {
      top: 65px;
    }

    img {
      height: 50px;
      background: black;

      @media (max-width: 400px) {
        height: 35px;
      }
    }
  }

  .description {
    width: 55%;
    margin: 1rem 0rem;
    text-align: right;

    @media (max-width: 1500px) {
      text-align: center;
    }

    p {
      font-size: 2rem;

      @media (max-width: 400px) {
        font-size: 1.5rem;
      }
    }
  }

  .react-card-flip {
    position: unset !important;
    /* z-index: 3 !important; */
    cursor: pointer;

    .card-back {
      position: unset !important;

      .back-image {
        border-radius: 1rem;

        @media (max-width: 800px) {
          width: 435px;
          height: 625px;
        }

        @media (max-width: 400px) {
          width: 285px;
          height: 420px;
        }
      }
    }
  }

  .training-egg-container {
    width: 70%;
    margin: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 1500px) {
      width: 90%;
    }

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
      margin: 0.5rem;

      .egg-icon,
      .training-icon {
        position: absolute;
        top: 0;
        left: -25px;
        width: 60px;
        z-index: -1;
        opacity: 0.6;

        @media (max-width: 800px) {
          left: 0px;
        }
      }

      .stat {
        position: relative;
        width: fit-content;
        margin: 1rem 0rem;

        .title {
          font-size: 2rem;
          display: inline-block;
          color: #ffffffa6;

          @media (max-width: 400px) {
            font-size: 1.5rem;
          }
        }

        .detail {
          font-size: 3rem;
          font-weight: 900;
          display: inline-block;
          color: rgba(256, 256, 256, 0.8);
          margin-left: 1rem;

          @media (max-width: 400px) {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;

export default InnerDetails;
