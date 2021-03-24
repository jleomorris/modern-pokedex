import React from 'react';
// Styled components
import styled from 'styled-components';
// Images
import pokeApi from '../img/feature_gallery/pokeapi.png';
import lunatoneOfficial from '../img/lunatone_official.png';
import card from '../img/feature_gallery/card.png';
import attack from '../img/stats/attack.svg';
import fire from '../img/pokemon_type_symbols/fire.png';
import search from '../img/feature_gallery/search.png';
// Components
import DynamicSprite from './DynamicSprite';

const FeatureGallery = () => {
  return (
    <StyledFeatureGallery className="feature-gallery">
      <StyledFeature className="feature">
        <img src={pokeApi} alt="pokeApi" />
        <h2 className="title">All data from pokeAPI</h2>
      </StyledFeature>
      <StyledFeature className="feature">
        <DynamicSprite id="6" type="shiny" />
        <h2 className="title">Custom sprite styles</h2>
      </StyledFeature>
      <StyledFeature className="feature">
        <img src={card} alt="card" />
        <h2 className="title">View card & extensive pokemon details</h2>
      </StyledFeature>
      <StyledFeature className="feature">
        <img src={lunatoneOfficial} alt="lunatone" />
        <h2 className="title">Dark mode</h2>
      </StyledFeature>
      <StyledFeature className="feature">
        <img src={search} alt="search" />
        <h2 className="title">Filter by search</h2>
      </StyledFeature>
      <StyledFeature className="feature">
        <img src={fire} alt="fire" />
        <h2 className="title">Filter by type</h2>
      </StyledFeature>
      <StyledFeature className="feature">
        <img src={attack} alt="attack" />
        <h2 className="title">Filter by highest base stat</h2>
      </StyledFeature>
    </StyledFeatureGallery>
  );
};

// Styled components
const StyledFeatureGallery = styled.div`
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  margin: 4rem auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
  width: 70%;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr)) !important;
  }
`;

const StyledFeature = styled.div`
  background: rgba(256, 256, 256, 0.8);
  color: black;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  position: relative;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  @media (max-width: 400px) {
    height: 200px;
  }

  img {
    margin: 1rem;
    width: 100px;
  }

  .title {
    text-align: center;
    font-weight: 100;
  }
`;

export default FeatureGallery;
