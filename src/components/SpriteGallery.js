import React from 'react';
// Styled components
import styled from 'styled-components';
// Components
import DynamicSprite from './DynamicSprite';

const SpriteGallery = ({ selectedPokemon, spriteSelectionHandler }) => {
  return (
    <StyledSpriteGallery className="sprite-gallery">
      <h3>Sprite Gallery</h3>
      <div className="sprites">
        <div className="sprite">
          <div className="circle" />
          <button
            type="button"
            onClick={() => spriteSelectionHandler('official')}
          >
            <img
              className="official-sprite"
              src={
                Object.values(selectedPokemon[0].sprites.other)[1].front_default
              }
              alt="default-sprite"
              value="official"
            />
          </button>
        </div>
        <div className="sprite">
          <div className="circle" />
          <button
            type="button"
            onClick={() => spriteSelectionHandler('default')}
          >
            <img
              className="default-sprite"
              src={selectedPokemon[0].sprites.front_default}
              alt="default-sprite"
            />
          </button>
        </div>
        <div className="sprite">
          <div className="circle" />
          <button type="button" onClick={() => spriteSelectionHandler('B&W')}>
            <DynamicSprite id={selectedPokemon[0].id} type="black and white" />
          </button>
        </div>
        <div className="sprite">
          <div className="circle" />
          <button
            type="button"
            onClick={() => spriteSelectionHandler('dream world')}
          >
            <img
              className="dream-world-sprite"
              src={selectedPokemon[0].sprites.other.dream_world.front_default}
              alt="default-sprite"
            />
          </button>
        </div>
        <div className="sprite">
          <div className="circle" />
          <button type="button" onClick={() => spriteSelectionHandler('shiny')}>
            <img
              className="shiny-sprite"
              src={selectedPokemon[0].sprites.front_shiny}
              alt="default-sprite"
            />
          </button>
        </div>
        <div className="sprite">
          <div className="circle" />
          <button
            type="button"
            onClick={() => spriteSelectionHandler('shiny animated')}
          >
            <DynamicSprite id={selectedPokemon[0].id} type="shiny" />
          </button>
        </div>
        <div className="sprite">
          <div className="circle" />
          <button type="button" onClick={() => spriteSelectionHandler('3D')}>
            <DynamicSprite type="3d" name={selectedPokemon[0].name} />
          </button>
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

      @media (max-width: 800px) {
        height: 90px;
        width: 90px;
      }

      @media (max-width: 400px) {
        height: 70px;
        width: 70px;
      }
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

    @media (max-width: 800px) {
      height: 80px;
      width: 80px;
    }

    @media (max-width: 400px) {
      height: 60px;
      width: 60px;
    }
  }
`;

export default SpriteGallery;
