import React from 'react';
import styled from 'styled-components';

const InnerDetailsNav = () => {
  const scrollToHandler = (ref) => {
    const heightToAdjustBy = document.querySelectorAll(ref)[0].offsetTop;
    // debugger;

    document.querySelectorAll('.inner-details')[0].scrollTop =
      heightToAdjustBy - 150;
  };

  return (
    <StyledInnerDetailsNav className="inner-details-nav">
      <ul>
        <button type="submit" onClick={() => scrollToHandler('.stat-chart')}>
          <li>Stats</li>
        </button>
        <button
          type="submit"
          onClick={() => scrollToHandler('.abilities-container')}
        >
          <li>Abilities</li>
        </button>
        <button
          type="submit"
          onClick={() => scrollToHandler('.strengths-weaknesses-container')}
        >
          <li>Damage types</li>
        </button>
        <button
          type="submit"
          onClick={() => scrollToHandler('.training-egg-container')}
        >
          <li>Training</li>
        </button>
        <button
          type="submit"
          onClick={() => scrollToHandler('.training-egg-container')}
        >
          <li>Egg</li>
        </button>
        <button
          type="submit"
          onClick={() => scrollToHandler('.location-area-container')}
        >
          <li>Where to find</li>
        </button>
        <button
          type="submit"
          onClick={() => scrollToHandler('.evolution-chart')}
        >
          <li>Evolution chart</li>
        </button>
        <button type="submit" onClick={() => scrollToHandler('.own-moves')}>
          <li>Own moves</li>
        </button>
        <button type="submit" onClick={() => scrollToHandler('.machine-moves')}>
          <li>Machine moves</li>
        </button>
      </ul>
    </StyledInnerDetailsNav>
  );
};

// Styled components
const StyledInnerDetailsNav = styled.div`
  margin: 1rem 0rem;

  ul {
    list-style: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    button {
      background: none;
      border: none;
      margin-right: 1rem;
      color: white;
      font-size: 1rem;
      transition: all 0.5s ease;
      border-bottom: 1px solid rgba(255, 255, 255, 0);

      &:hover {
        border-bottom: 1px solid white;
      }

      li {
        margin: 1rem;
        cursor: pointer;
      }
    }
  }
`;

export default InnerDetailsNav;
