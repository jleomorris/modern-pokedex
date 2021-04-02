import React from 'react';
// Styled components
import styled from 'styled-components';
// Components
import DynamicSprite from './DynamicSprite';

const SpriteGallery = ({
  selectedPokemon,
  spriteSelectionHandler,
  flipHandler,
}) => {
  const spriteChangeHandler = (type) => {
    spriteSelectionHandler(type);
    flipHandler();
  };

  const spriteMouseEnterHandler = (e) => {
    console.log(e);
    // e.target.offsetParent.children[0].style.border = '5px solid #ffff7a';
    e.target.offsetParent.children[0].style.background = '#ffff7a';
  };

  const spriteMouseLeaveHandler = (e) => {
    console.log(e);
    e.target.offsetParent.children[0].style.background = '#ffffffa3';
    // e.target.offsetParent.children[0].style.border = 'unset';
  };

  return (
    <StyledSpriteGallery className="sprite-gallery">
      <h3>Sprite Gallery</h3>
      <p>(Select one)</p>
      <div className="sprites">
        <div className="sprite">
          <div className="circle" />
          <button type="button" onClick={() => spriteChangeHandler('official')}>
            <DynamicSprite
              id={selectedPokemon[0].id}
              type="official"
              mouseEnterHandler={spriteMouseEnterHandler}
              mouseLeaveHandler={spriteMouseLeaveHandler}
            />
          </button>
        </div>
        <div className="sprite">
          <div className="circle" />
          <button type="button" onClick={() => spriteChangeHandler('default')}>
            <DynamicSprite
              id={selectedPokemon[0].id}
              type="default"
              mouseEnterHandler={spriteMouseEnterHandler}
              mouseLeaveHandler={spriteMouseLeaveHandler}
            />
          </button>
        </div>
        <div className="sprite">
          <div className="circle" />
          <button type="button" onClick={() => spriteChangeHandler('B&W')}>
            <DynamicSprite
              id={selectedPokemon[0].id}
              type="black and white animated"
              mouseEnterHandler={spriteMouseEnterHandler}
              mouseLeaveHandler={spriteMouseLeaveHandler}
            />
          </button>
        </div>
        <div className="sprite">
          <div className="circle" />
          <button
            type="button"
            onClick={() => spriteChangeHandler('dream world')}
          >
            <DynamicSprite
              id={selectedPokemon[0].id}
              type="dream world"
              mouseEnterHandler={spriteMouseEnterHandler}
              mouseLeaveHandler={spriteMouseLeaveHandler}
            />
          </button>
        </div>
        <div className="sprite">
          <div className="circle" />
          <button type="button" onClick={() => spriteChangeHandler('shiny')}>
            <DynamicSprite
              id={selectedPokemon[0].id}
              type="shiny"
              mouseEnterHandler={spriteMouseEnterHandler}
              mouseLeaveHandler={spriteMouseLeaveHandler}
            />
          </button>
        </div>
        <div className="sprite">
          <div className="circle" />
          <button
            type="button"
            onClick={() => spriteChangeHandler('shiny animated')}
          >
            <DynamicSprite
              id={selectedPokemon[0].id}
              type="shiny animated"
              mouseEnterHandler={spriteMouseEnterHandler}
              mouseLeaveHandler={spriteMouseLeaveHandler}
            />
          </button>
        </div>
        <div className="sprite">
          <div className="circle" />
          <button type="button" onClick={() => spriteChangeHandler('3D')}>
            <DynamicSprite
              type="3d"
              name={selectedPokemon[0].name}
              mouseEnterHandler={spriteMouseEnterHandler}
              mouseLeaveHandler={spriteMouseLeaveHandler}
            />
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

  p {
    color: white;
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

      button {
        img {
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
      }
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
      transition: 0.5s all ease;

      &:hover {
        background: #030000;
      }

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
`;

export default SpriteGallery;
