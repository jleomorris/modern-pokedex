import React from 'react';
// Styled components
import styled from 'styled-components';
// Images
import zapdos from '../img/attributions_wallpaper.png';

const Attributions = () => {
  return (
    <StyledAttributions className="attributions">
      <img className="zapdos" src={zapdos} alt="zapdos" />
      <h1>Attributions</h1>
      <ul>
        <li>
          <span className="asset">Api </span>- pokeAPI
        </li>
        <li>
          <span className="asset">Home wallpaper</span>- eocen on Fanpop
        </li>
        <li>
          <span className="asset">Icons</span> - Icons8
        </li>
        <li>
          <span className="asset">Black and White and Shiny animations</span> -
          https://github.com/PokeAPI/sprites
        </li>
        <li>
          <span className="asset">3D sprite animations </span>-
          https://projectpokemon.org/
        </li>
        <li>
          <span className="asset">Pokeball css animation </span>-
          https://github.com/athanstancss{' '}
        </li>
        <li>
          <span className="asset">Pokemon series custom logos </span>- brfa98
          (https://www.instagram.com/bplayingcards/)
        </li>
        <li>
          <span className="asset">Tile backgrounds </span>- Pexels
        </li>
        <li>
          <span className="asset">Move category and first edition icons </span>-
          Bulbapedia
        </li>
        <li>
          <span className="asset">Pokemon quotes </span>- sweetyhigh.com,
          factcity.com, softschools.com
        </li>
      </ul>
      {/* </div> */}
    </StyledAttributions>
  );
};

// Styled components
const StyledAttributions = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  position: relative;
  flex-direction: column;
  padding: 2rem;

  .zapdos {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 600px;
    filter: drop-shadow(2px 4px 6px black);
    z-index: 0;
  }

  /* h1 {
    font-size: 10rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: #000000b3;
    margin: 2rem;
    z-index: 1;
    align-self: flex-start;
  } */

  h1 {
    font-size: 5rem;
    width: 80vw;
    color: white;
    text-shadow: 0px 5px 30px rgb(0 0 0);
    padding: 2rem;
    font-weight: 100;
    align-self: flex-start;
    color: black;

    @media (max-width: 800px) {
      font-size: 3rem;
    }

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }

  ul {
    font-size: 2rem;
    color: black;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
    padding: 4rem;
    border-radius: 2rem;
    margin: 4rem 0rem;

    li {
      line-height: 4rem;

      .asset {
        font-weight: 900;
      }
    }
  }
  /* position: absolute;
  bottom: 100px;
  right: 100px;
  background: #fffffff2;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  .attributions-container {
    margin: 1rem;
    transition: all 5s ease;

    p {
      margin: 1rem 0rem;
      font-size: 1rem;
      font-weight: 600;
    }
  } */
`;

export default Attributions;
