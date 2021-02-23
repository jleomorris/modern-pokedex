import React from 'react';
// Styled components
import styled from 'styled-components';
// Images
import forwardArrow from '../img/icons8-forward-arrow-50.png';
import backArrow from '../img/icons8-reply-arrow-50.png';

const ForwardBackButtons = ({ setPokemonId }) => {
  return (
    // Icons courtesy of icons8
    <StyledForwardBackButtons className="forward-back-button-container">
      <button
        type="button"
        onClick={() =>
          setPokemonId((prev) => (parseFloat(prev) - 1).toString())
        }
      >
        <img src={backArrow} alt="back arrow" />
      </button>
      <button
        type="button"
        onClick={() =>
          setPokemonId((prev) => (parseFloat(prev) + 1).toString())
        }
      >
        <img src={forwardArrow} alt="back arrow" />
      </button>
    </StyledForwardBackButtons>
  );
};

// Styled components
const StyledForwardBackButtons = styled.div`
  margin-top: 1rem;

  button {
    color: transparent;
    outline: none;
    border: none;
    margin: 0rem 0.5rem;
    cursor: pointer;

    img {
      filter: invert(1);
      background: white;
    }
  }
`;

export default ForwardBackButtons;
