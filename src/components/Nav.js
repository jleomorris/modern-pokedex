import React from 'react';
// React Router
import { Link } from 'react-router-dom';
// Styled components
import styled from 'styled-components';

const Nav = () => {
  return (
    <StyledNav>
      <nav>
        <h1>Modern Pokedex</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
          <li>
            <Link to="/attributions">Attributions</Link>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
};

// Styled components
const StyledNav = styled.div`
  background: rgba(0, 0, 0, 1);
  width: 100%;
  font-size: 1rem;
  letter-spacing: 0.5rem;
  position: sticky;
  top: 0px;
  z-index: 999;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px -10px 40px rgba(255, 255, 255, 0.3);
  }

  h1 {
    color: white;
    font-size: 2rem;
    padding: 2rem;
    font-family: 'Bebas Neue', cursive;
    font-weight: 100;

    @media (max-width: 800px) {
      padding: 1rem;
      font-size: 1rem;
      width: 20%;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
    flex-wrap: wrap;

    @media (max-width: 500px) {
      justify-content: flex-end;
    }

    li {
      margin: 1rem;

      @media (max-width: 800px) {
        margin: 0.5rem;
      }

      a {
        color: white;
        text-decoration: none;
        cursor: pointer;
        z-index: 1;
      }
    }
  }
`;

export default Nav;
