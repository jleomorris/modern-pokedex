// Animation and design courtesy of Athanstan https://github.com/athanstan

import React, { useEffect, useState } from 'react';
// Styled components
import styled from 'styled-components';
// Redux
import { useSelector } from 'react-redux';
// Carousel
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// Quotes
import { LoadingPageQuotes } from '../LoadingPageQuotes';

const LoadingModal = () => {
  const [facts, setFacts] = useState();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const randomFacts = LoadingPageQuotes().sort(() => Math.random() - 0.5);
    setFacts(randomFacts);
  }, []);

  // Redux
  const dataLoaded = useSelector((state) => state.pokemon.pokemonLoaded);

  return (
    <StyledLoadingModal className="poke-ball">
      <div className="pokeball-container">
        <div className="loading-block">
          <div className="pokeball">
            <div className="pokeball__button" />
          </div>
          <h2 className="loading-percentage">
            {`${Math.round((dataLoaded / 302) * 100)}%`}
          </h2>
          <h2>Loaded </h2>
        </div>
        <div className="fact-block">
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            autoPlay
            infiniteLoop
            // axis="vertical"
            dynamicHeight
            interval={6000}
            //   onChange={onChange}
            //   onClickItem={onClickItem}
            //   onClickThumb={onClickThumb}
          >
            {facts &&
              facts.map((fact) => (
                <div className="slide">
                  <p>{fact}</p>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </StyledLoadingModal>
  );
};

// Styled components
const StyledLoadingModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #000000e8;
  z-index: 999;

  .pokeball-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 1200px) {
      flex-direction: column;
    }

    .loading-block {
      /* margin: 4rem; */
      width: 30%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-end;
      padding-right: 8rem;

      @media (max-width: 1200px) {
        /* margin-bottom: 4rem; */
        align-items: center;
        padding-right: unset;
      }
    }

    .fact-block {
      width: 50%;
      border-left: 4px solid white;
      margin-top: 4rem;

      @media (max-width: 1200px) {
        border-top: 4px solid white;
        border-left: unset;
      }

      @media (max-width: 500px) {
        margin-top: 1rem;
      }

      .slide {
        p {
          color: white;
          padding: 2rem 8rem;
          font-size: 2rem;
          letter-spacing: 0.5rem;
          text-align: left;

          @media (max-width: 1200px) {
            padding: 4rem 0rem;
          }

          @media (max-width: 500px) {
            padding: 1rem 1rem;
            font-size: 1rem;
          }
        }
      }
    }
  }

  h2 {
    position: relative;
    padding-top: 1rem;
    font-size: 3rem;
    font-weight: 100;
    text-transform: uppercase;
    color: white;

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }

  .loading-percentage {
    font-size: 6rem;
    font-weight: 900;
    color: white;
    text-shadow: 0px 5px 20px black;
    z-index: -1;

    @media (max-width: 500px) {
      font-size: 2rem;
    }
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

    @media (max-width: 500px) {
      width: 100px;
      height: 100px;
    }
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

    @media (max-width: 500px) {
      top: calc(50% - 10px);
      left: calc(50% - 10px);
      width: 20px;
      height: 20px;
    }
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
export default LoadingModal;
