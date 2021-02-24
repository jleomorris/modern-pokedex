import React from 'react';
// Styled components
import styled from 'styled-components';
// Images
import screenshotBackground from '../img/home_background.jpg'; // Image courtesy of geocen on Fanpop

const Home = () => {
  return (
    <StyledHome>
      <img
        className="background-image"
        src={screenshotBackground}
        alt="background"
      />
      <div className="content-container">
        <p>A modern take on the classic generation 1 pokedex.</p>
        <ul>
          <li>All data from pokeapi</li>
          <li>Custom sprite styles</li>
          <li>View Pokemon card and extensive data</li>
          <li>Dark mode</li>
          <li>Filter by search and type</li>
        </ul>
      </div>
    </StyledHome>
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
    height: 90vh;
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
  }

  ul {
    color: white;
    font-size: 2rem;
    list-style: none;
    position: absolute;
    top: 60%;
    transform: translateY(-60%);
    right: -100px;

    @media (max-width: 800px) {
      right: -50px;
    }

    li {
      background: rgba(256, 256, 256, 0.2);
      padding: 0.5rem 1rem;
      margin: 1rem 0rem;
      border-radius: 0rem 1rem 1rem 0rem;
    }
  }
`;

export default Home;
