// Animation and design courtesy of Athanstan https://github.com/athanstan

import React from 'react';
// Styled components
import styled from 'styled-components';

const PokeBall = () => {
  return (
    <StyledPokeball className="poke_box">
      <div className="pokeball">
        <div className="pokeball__button" />
      </div>
      <h2>Loading...</h2>
    </StyledPokeball>
  );
};

// Styled components
const StyledPokeball = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin-left: 2rem;
    font-size: 3rem;
  }

  .pokeball {
    position: relative;
    width: 150px;
    height: 150px;
    background: #fff;
    border: 5px solid #000;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset -10px 10px 0 10px #ccc;
    animation: shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    /* animation-play-state: paused; */
    animation-play-state: running;
  }

  /* .pokeball:hover {
  } */

  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-10px, 0) rotate(-20deg);
    }
    30% {
      transform: translate(10px, 0) rotate(20deg);
    }
    50% {
      transform: translate(-10px, 0) rotate(-10deg);
    }
    60% {
      transform: translate(10px, 0) rotate(10deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }

  .pokeball::before,
  .pokeball::after {
    content: '';
    position: absolute;
  }

  .pokeball::before {
    background: red;
    width: 100%;
    height: 50%;
  }

  .pokeball::after {
    top: calc(50% - 5px);
    width: 100%;
    height: 10px;
    background: #000;
  }

  .pokeball__button {
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    width: 30px;
    height: 30px;
    background: #fff;
    border: 4px solid #7f8c8d;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 0 7px black;
    animation: blink 1s alternate infinite;
    /* animation-play-state: paused; */
    animation-play-state: running;
  }

  /* .pokeball:hover .pokeball__button {
  } */

  @keyframes blink {
    from {
      background: #eee;
    }
    to {
      background: #e74c3c;
    }
  }
`;
export default PokeBall;