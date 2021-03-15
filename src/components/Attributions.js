import React, { useState } from 'react';
// Styled components
import styled from 'styled-components';
// Images
import info from '../img/info.svg';

const Attributions = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <StyledAttributions
      className="attributions"
      onClick={() => setIsVisible((prev) => !prev)}
    >
      <img src={info} alt="info" />
      {isVisible && (
        <div className="attributions-container">
          <p>Icons - Icons8</p>
          <p>3d animations - https://projectpokemon.org/</p>
          <p>Pokeball loading animation - arhg</p>
          <p>Api - pokeAPI</p>
          <p>
            Pokemon series logos - brfa98
            (https://www.instagram.com/bplayingcards/)
          </p>
          <p>tile backgrounds - pexels</p>
        </div>
      )}
    </StyledAttributions>
  );
};

// Styled components
const StyledAttributions = styled.div`
  position: absolute;
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
  }
`;

export default Attributions;
