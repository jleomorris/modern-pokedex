import React, { useEffect } from 'react';
// Styled components
import styled from 'styled-components';
// Video player
// import { Player, ControlBar } from 'video-react';
// import charizardAnimation from '../img/sprite_animations/charizard.mp4';
// Framer motion
import { motion } from 'framer-motion';
// Images
import screenshotBackground from '../img/home_background.jpg'; // Image courtesy of geocen on Fanpop
// Components
import Footer from '../components/Footer';
// Animations
import pageAnimation from '../animation';

const Home = () => {
  //   useEffect(() => {
  //     document.body.style.overflow = 'auto';
  //   }, []);

  return (
    <>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <StyledHome
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <img
            className="background-image"
            src={screenshotBackground}
            alt="background"
          />
          {/* <Player playsInline src={charizardAnimation} autoPlay loop>
          <ControlBar autoHide />
        </Player> */}
          <div className="content-container">
            <p>A modern take on the classic generation 1 pokedex.</p>
            <ul>
              <li>All data from pokeapi</li>
              <li>Custom sprite styles</li>
              <li>
                View card, location area, evolution, learnable & machine moves{' '}
              </li>
              <li>Dark mode</li>
              <li>Filter by search, type and highest base stat</li>
            </ul>
          </div>
        </StyledHome>
        <Footer />
      </motion.div>
    </>
  );
};

// Styled components
const StyledHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 90vh;

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(0.8);
    z-index: -1;
    min-height: 90vh;
    object-fit: cover;
  }

  .content-container {
    width: 40%;
    background: rgba(0, 0, 0, 0.9);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: end;
    padding: 2rem;
    min-height: 90vh;
    position: relative;

    @media (max-width: 800px) {
      width: 70%;
    }
  }

  p {
    font-size: 5rem;
    width: 80vw;
    color: white;
    text-shadow: 0px 5px 30px rgb(0 0 0);
    padding: 2rem;

    @media (max-width: 800px) {
      font-size: 3rem;
    }

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }

  ul {
    color: white;
    font-size: 2rem;
    list-style: none;
    margin-left: -2rem;

    @media (max-width: 400px) {
      font-size: 1rem;
    }

    li {
      background: rgba(256, 256, 256, 0.5);
      padding: 0.5rem 1rem;
      margin: 1rem 0rem;
      border-radius: 0rem 2rem 2rem 0rem;
    }
  }
`;

export default Home;
