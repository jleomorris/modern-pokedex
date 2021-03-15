import React, { useEffect, useState } from 'react';
// React Router
import { Link } from 'react-router-dom';
// Styled components
import styled from 'styled-components';
// Framer motion and animations
import { motion } from 'framer-motion';
import { scrollRevealBottom, container } from '../animation';
// Components
import DynamicSprite from './DynamicSprite';
// Util
import {
  convertToTypeImage,
  convertToTypeBackground,
  convertMaxStatToIcon,
} from '../util';

const Tile = ({
  pokemon,
  isDefaultSelected,
  isBlackAndWhiteAnimatedSelected,
  isDreamWorldSelected,
  isOfficialSelected,
  isShinySelected,
  isShinyAnimatedSelected,
  is3dSelected,
}) => {
  // State
  const [highestStat, setHighestStat] = useState();

  useEffect(() => {
    // console.log('tile.pokemon', pokemon);
    if (pokemon) {
      const pokemonStats = pokemon.stats;
      let highest = {
        base_stat: 0,
        effort: 0,
        stat: {
          name: 'hp',
          url: '',
        },
      };

      for (let i = 0; i < pokemonStats.length; i += 1) {
        if (pokemonStats[i].base_stat >= highest.base_stat) {
          highest = pokemonStats[i];
        }
      }

      console.log('highest stat', highest.stat.name);
      setHighestStat(highest.stat.name);
    }
  }, [pokemon]);

  return (
    <StyledTile
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="tile"
    >
      <div className="background-circle" />
      <div className="background-image-container">
        {convertToTypeBackground(pokemon.types[0].type.name)}
      </div>
      {/* <p className="attack">{pokemon.stats[1].base_stat}</p> */}
      <motion.div variants={scrollRevealBottom} className="max-stat-container">
        {convertMaxStatToIcon(highestStat)}
      </motion.div>
      <motion.div variants={scrollRevealBottom} className="type-container">
        {pokemon.types.map((type) => (
          <div key={type.type.name}>{convertToTypeImage(type.type.name)}</div>
        ))}
      </motion.div>
      <div className="name-health-container">
        <h2 className="pokemon-card-title">{pokemon.name}</h2>
        {/* <p className="hp">{pokemon.stats[0].base_stat} HP</p> */}
      </div>
      <Link to={`/pokemon/${pokemon.id}`}>
        {isDreamWorldSelected && (
          <img
            className="pokemon-card-image-dream-world"
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        )}
        {isOfficialSelected && (
          <img
            className="pokemon-card-image-official"
            src={Object.values(pokemon.sprites.other)[1].front_default}
            alt={pokemon.name}
          />
        )}
        {isDefaultSelected && (
          <img
            className="pokemon-card-image-default"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        )}
        {isBlackAndWhiteAnimatedSelected && (
          <DynamicSprite id={pokemon.id} type="black and white" />
        )}
        {isShinySelected && (
          <img
            className="pokemon-card-image-shiny"
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name}
          />
        )}
        {isShinyAnimatedSelected && (
          <DynamicSprite id={pokemon.id} type="shiny" />
        )}
        {is3dSelected && <DynamicSprite id={6} type="3d" name={pokemon.name} />}
      </Link>
      <p className="id">#{pokemon.id}</p>
    </StyledTile>
  );
};

// Styled components
const StyledTile = styled(motion.div)`
  height: 300px;
  /* margin: 2rem 1rem; */
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  position: relative;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);

  a {
    /* width: 100%;
        height: 100%; */
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
    /* z-index: 1; */
  }

  .background-image-container {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* z-index: -2; */

    img {
      z-index: -1;
    }
  }

  .max-stat-container {
    position: absolute;
    top: 5px;
    left: 5px;
    padding: 0.5rem;
    background: rgba(256, 256, 256, 0.7);
    border-radius: 1rem;

    img {
      width: 30px;
    }
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
    /* z-index: -2; */
  }

  /* .attack {
    position: absolute;
    top: -25px;
    left: -5px;
    font-size: 2rem;
    background: red;
    border: 2px solid black;
    padding: 0.5rem;
    border-radius: 1rem;
  } */

  .type-container {
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;

    img {
      width: 50px;
      margin-left: -20px;
    }
  }

  .name-health-container {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-top: 3rem;

    /* .hp {
      position: absolute;
      top: 5px;
      right: 5px;
      font-size: 1.25rem;
      color: white;
    } */

    .pokemon-card-title {
      text-align: center;
      text-transform: capitalize;
      font-size: 2rem;
      color: white;
      font-family: 'Bebas Neue', cursive;
      letter-spacing: 0.25rem;
      /* z-index: 2; */
      text-shadow: 0px 5px 30px white;
    }
  }

  .pokemon-card-image-dream-world,
  .pokemon-card-image-official,
  .pokemon-card-image-default,
  .pokemon-card-image-shiny {
    height: 190px;
    width: 190px;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .sprite-animation-3d {
    height: 100px;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .default-sprite-animation,
  .shiny-sprite-animation {
    height: 150px;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .id {
    position: absolute;
    bottom: -15px;
    background: white;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 2rem;
    border-radius: 2rem;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  }
`;

export default Tile;
