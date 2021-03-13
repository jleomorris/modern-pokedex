import React from 'react';
// Sprite gifs
import bulbasaur from './img/sprite_animations/default/bulbasaur.gif';
import ivysaur from './img/sprite_animations/default/ivysaur.gif';
import venusaur from './img/sprite_animations/default/venusaur.gif';
import charmander from './img/sprite_animations/default/charmander.gif';
import charmeleon from './img/sprite_animations/default/charmeleon.gif';
import charizard from './img/sprite_animations/default/charizard.gif';
import squirtle from './img/sprite_animations/default/squirtle.gif';
import wartortle from './img/sprite_animations/default/wartortle.gif';
import blastoise from './img/sprite_animations/default/blastoise.gif';
import caterpie from './img/sprite_animations/default/caterpie.gif';
import metapod from './img/sprite_animations/default/metapod.gif';
import butterfree from './img/sprite_animations/default/butterfree.gif';
import weedle from './img/sprite_animations/default/weedle.gif';
import kakuna from './img/sprite_animations/default/kakuna.gif';
import beedrill from './img/sprite_animations/default/beedrill.gif';
import pidgey from './img/sprite_animations/default/pidgey.gif';
import pidgeotto from './img/sprite_animations/default/pidgeotto.gif';
import pidgeot from './img/sprite_animations/default/pidgeot.gif';
import rattata from './img/sprite_animations/default/rattata.gif';

export const convertNameToDefaultSpriteAnimation = (name) => {
  switch (name) {
    case 'bulbasaur':
      return (
        <img
          className="default-sprite-animation"
          src={bulbasaur}
          alt="sprite animation"
        />
      );
    case 'ivysaur':
      return (
        <img
          className="default-sprite-animation"
          src={ivysaur}
          alt="sprite animation"
        />
      );
    case 'venusaur':
      return (
        <img
          className="default-sprite-animation"
          src={venusaur}
          alt="sprite animation"
        />
      );
    case 'charmander':
      return (
        <img
          className="default-sprite-animation"
          src={charmander}
          alt="sprite animation"
        />
      );
    case 'charmeleon':
      return (
        <img
          className="default-sprite-animation"
          src={charmeleon}
          alt="sprite animation"
        />
      );
    case 'charizard':
      return (
        <img
          className="default-sprite-animation"
          src={charizard}
          alt="sprite animation"
        />
      );
    case 'squirtle':
      return (
        <img
          className="default-sprite-animation"
          src={squirtle}
          alt="sprite animation"
        />
      );
    case 'wartortle':
      return (
        <img
          className="default-sprite-animation"
          src={wartortle}
          alt="sprite animation"
        />
      );
    case 'blastoise':
      return (
        <img
          className="default-sprite-animation"
          src={blastoise}
          alt="sprite animation"
        />
      );
    case 'caterpie':
      return (
        <img
          className="default-sprite-animation"
          src={caterpie}
          alt="sprite animation"
        />
      );
    case 'metapod':
      return (
        <img
          className="default-sprite-animation"
          src={metapod}
          alt="sprite animation"
        />
      );
    case 'butterfree':
      return (
        <img
          className="default-sprite-animation"
          src={butterfree}
          alt="sprite animation"
        />
      );
    case 'weedle':
      return (
        <img
          className="default-sprite-animation"
          src={weedle}
          alt="sprite animation"
        />
      );
    case 'kakuna':
      return (
        <img
          className="default-sprite-animation"
          src={kakuna}
          alt="sprite animation"
        />
      );
    case 'beedrill':
      return (
        <img
          className="default-sprite-animation"
          src={beedrill}
          alt="sprite animation"
        />
      );
    case 'pidgey':
      return (
        <img
          className="default-sprite-animation"
          src={pidgey}
          alt="sprite animation"
        />
      );
    case 'pidgeotto':
      return (
        <img
          className="default-sprite-animation"
          src={pidgeotto}
          alt="sprite animation"
        />
      );
    case 'pidgeot':
      return (
        <img
          className="default-sprite-animation"
          src={pidgeot}
          alt="sprite animation"
        />
      );
    case 'rattata':
      return (
        <img
          className="default-sprite-animation"
          src={rattata}
          alt="sprite animation"
        />
      );
    default:
      return name;
  }
};
