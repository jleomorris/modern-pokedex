import React from 'react';
// React Router
import { Link, useLocation } from 'react-router-dom';
// Styled components
import styled from 'styled-components';

const Nav = () => {
  return (
    <StyledNav>
      <nav>
        <h1>Ready to React</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/redux-demo">Redux Demo</Link>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
};

// Styled components
const StyledNav = styled.div`
  background: rgba(0, 0, 0, 0.9);
  width: 100%;
  font-size: 1rem;
  letter-spacing: 0.5rem;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    color: white;
    font-size: 2rem;
    padding: 2rem;
    font-family: 'Bebas Neue', cursive;
    font-weight: 100;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-transform: uppercase;

    li {
      margin: 1rem;

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
