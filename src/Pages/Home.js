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
import ScrollToTopOfPage from '../components/ScrollToTopOfPage';
import FeatureGallery from '../components/FeatureGallery';
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
        <ScrollToTopOfPage />
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
          <div className="content-container"></div>
          <h1>A modern take on the classic generation 1 pokedex.</h1>
          <FeatureGallery />
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
  padding: 2rem;

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
    background: rgba(0, 0, 0, 0.9);
    width: 40%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @media (max-width: 800px) {
      width: 70%;
    }
  }

  h1 {
    font-size: 5rem;
    width: 80vw;
    color: white;
    text-shadow: 0px 5px 30px rgb(0 0 0);
    padding: 2rem;
    font-weight: 100;

    @media (max-width: 800px) {
      font-size: 3rem;
    }

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
`;

export default Home;
