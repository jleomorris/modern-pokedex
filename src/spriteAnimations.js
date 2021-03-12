import React from 'react';
// Sprite gifs
import charizard from './img/sprite_animations/charizard.gif';

export const convertNameToSpriteAnimation = (name) => {
  switch (name) {
    case 'charizard':
      return (
        <img
          className="default-sprite-animation"
          src={charizard}
          alt="sprite animation"
        />
      );
    default:
      return name;
  }
};
