import React from 'react';
// Styled components
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledHome>
      <div className="content-container">
        <p>
          A preconfigured React environment, with the following ready to go:
        </p>
        <ul>
          <li>Babel, Webpack</li>
          <li>ES Linting (Airbnb)</li>
          <li>Styled Components</li>
          <li>Redux and Redux Dev Tools</li>
          <li>React Router</li>
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

  .content-container {
    width: 40%;
    background: rgba(0, 0, 0, 0.3);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: end;
    padding: 4rem;
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
