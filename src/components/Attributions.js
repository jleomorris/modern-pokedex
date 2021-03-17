import React from 'react';
// Styled components
import styled from 'styled-components';
// Images
import info from '../img/info.svg';
import wallpaper from '../img/attributions_wallpaper.png';

const Attributions = () => {
  return (
    <StyledAttributions className="attributions">
      <img className="wallpaper" src={wallpaper} alt="wallpaper" />
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

  .wallpaper {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 600px;
    filter: drop-shadow(2px 4px 6px black);
    z-index: 0;
  }

  h1 {
    font-size: 10rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: #000000b3;
    /* margin-right: -40vh; */
    /* text-shadow: 0px 0px 10px black; */
    margin: 2rem;
    /* margin-right: -52vh; */
    z-index: 1;
    align-self: flex-start;
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
        font-size: 2.5rem;
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
