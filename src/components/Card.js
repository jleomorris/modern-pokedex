import React from 'react';
// React Router
import { Link } from 'react-router-dom';
// Styled components
import styled from 'styled-components';
// Util
import { convertToTypeImage, convertToTypeBackground } from '../util';

const Card = ({
  pokemon,
  isDefaultSelected,
  isDreamWorldSelected,
  isOfficialSelected,
}) => {
  return (
    <StyledCard className="card">
      <div className="background-circle" />
      <div className="background-image-container">
        {convertToTypeBackground(pokemon.types[0].type.name)}
      </div>
      <p className="attack">{pokemon.stats[1].base_stat}</p>
      <div className="type-container">
        {pokemon.types.map((type) => (
          <div key={type.type.name}>{convertToTypeImage(type.type.name)}</div>
        ))}
      </div>
      <div className="name-health-container">
        <h2 className="pokemon-card-title">{pokemon.name}</h2>
        <p className="hp">{pokemon.stats[0].base_stat} HP</p>
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
      </Link>
      <p className="id">#{pokemon.id}</p>
    </StyledCard>
  );
};

// Styled components
const StyledCard = styled.div`
  height: 300px;
  margin: 2rem 1rem;
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
    z-index: 1;
  }

  .background-image-container {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    /* z-index: -2; */
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

  .type-container {
    position: absolute;
    top: -25px;
    left: 53%;
    transform: translateX(-50%);
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

    .hp {
      position: absolute;
      top: 5px;
      right: 5px;
      font-size: 1.25rem;
      color: white;
    }

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
    height: 190px;
    width: 190px;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
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

export default Card;
