import React from 'react';
// Styled components
import styled from 'styled-components';
// Images
import info from '../img/info.svg';

const Attributions = () => {
  return (
    <StyledAttributions className="attributions">
      {/* <img src={info} alt="info" /> */}
      {/* <div className="attributions-container"> */}
      <ul>
        <li>Icons - Icons8</li>
        <li>3d animations - https://projectpokemon.org/</li>
        <li>Pokeball loading animation - arhg</li>
        <li>Api - pokeAPI</li>
        <li>
          Pokemon series logos - brfa98
          (https://www.instagram.com/bplayingcards/)
        </li>
        <li>Tile backgrounds - pexels</li>
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

  ul {
    font-size: 2rem;
    color: black;
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
