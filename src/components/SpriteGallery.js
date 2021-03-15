import React from 'react';
// Styled components
import styled from 'styled-components';
// Components
import DynamicSprite from './DynamicSprite';

const SpriteGallery = ({ selectedPokemon }) => {
  return (
    <StyledSpriteGallery className="sprite-gallery">
      <h3>Sprite Gallery</h3>
      <div className="sprites">
        <div className="sprite">
          <div className="circle" />
          <img
            className="official-sprite"
            src={
              Object.values(selectedPokemon[0].sprites.other)[1].front_default
            }
            alt="default-sprite"
          />
        </div>
        <div className="sprite">
          <div className="circle" />
          <img
            className="default-sprite"
            src={selectedPokemon[0].sprites.front_default}
            alt="default-sprite"
          />
        </div>
        <div className="sprite">
          <div className="circle" />
          <DynamicSprite id={selectedPokemon[0].id} type="black and white" />
        </div>
        <div className="sprite">
          <div className="circle" />
          <img
            className="dream-world-sprite"
            src={selectedPokemon[0].sprites.other.dream_world.front_default}
            alt="default-sprite"
          />
        </div>
        <div className="sprite">
          <div className="circle" />
          <img
            className="shiny-sprite"
            src={selectedPokemon[0].sprites.front_shiny}
            alt="default-sprite"
          />
        </div>
        <div className="sprite">
          <div className="circle" />
          <DynamicSprite id={selectedPokemon[0].id} type="shiny" />
        </div>
        <div className="sprite">
          <div className="circle" />
          <DynamicSprite type="3d" name={selectedPokemon[0].name} />
        </div>
      </div>
    </StyledSpriteGallery>
  );
};

// Styled components
const StyledSpriteGallery = styled.div`
  /* border: 2px solid red; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;

  h3 {
    color: white;
    text-transform: uppercase;
    text-align: center;
  }

  .sprites {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    width: 100%;

    .sprite {
      position: relative !important;
      margin: 1rem;
    }

    .circle {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      height: 120px;
      width: 120px;
      background: #ffffffa3;
      border-radius: 50%;
      z-index: -1;
    }
  }

  .official-sprite,
  .default-sprite,
  .dream-world-sprite,
  .shiny-sprite,
  .default-sprite-animation,
  .shiny-sprite-animation,
  .sprite-animation-3d {
    height: 125px;
    width: 125px;
    object-fit: contain;
  }
`;

export default SpriteGallery;
