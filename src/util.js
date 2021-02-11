import React from 'react';
// Images
import fire from './img/pokemon_type_symbols/fire.png';
import bug from './img/pokemon_type_symbols/bug.png';
import dark from './img/pokemon_type_symbols/dark.png';
import dragon from './img/pokemon_type_symbols/dragon.png';
import electric from './img/pokemon_type_symbols/electric.png';
import fairy from './img/pokemon_type_symbols/fairy.png';
import fighting from './img/pokemon_type_symbols/fighting.png';
import flying from './img/pokemon_type_symbols/flying.png';
import ghost from './img/pokemon_type_symbols/ghost.png';
import grass from './img/pokemon_type_symbols/grass.png';
import ground from './img/pokemon_type_symbols/ground.png';
import ice from './img/pokemon_type_symbols/ice.png';
import normal from './img/pokemon_type_symbols/normal.png';
import poison from './img/pokemon_type_symbols/poison.png';
import psychic from './img/pokemon_type_symbols/psychic.png';
import rock from './img/pokemon_type_symbols/rock.png';
import steel from './img/pokemon_type_symbols/steel.png';
import water from './img/pokemon_type_symbols/water.png';

export const convertToTypeImage = (type) => {
  switch (type) {
    case 'fire':
      return <img src={fire} alt={type} />;
    case 'bug':
      return <img src={bug} alt={type} />;
    case 'dark':
      return <img src={dark} alt={type} />;
    case 'dragon':
      return <img src={dragon} alt={type} />;
    case 'electric':
      return <img src={electric} alt={type} />;
    case 'fairy':
      return <img src={fairy} alt={type} />;
    case 'fighting':
      return <img src={fighting} alt={type} />;
    case 'flying':
      return <img src={flying} alt={type} />;
    case 'ghost':
      return <img src={ghost} alt={type} />;
    case 'grass':
      return <img src={grass} alt={type} />;
    case 'ground':
      return <img src={ground} alt={type} />;
    case 'ice':
      return <img src={ice} alt={type} />;
    case 'normal':
      return <img src={normal} alt={type} />;
    case 'poison':
      return <img src={poison} alt={type} />;
    case 'psychic':
      return <img src={psychic} alt={type} />;
    case 'rock':
      return <img src={rock} alt={type} />;
    case 'steel':
      return <img src={steel} alt={type} />;
    case 'water':
      return <img src={water} alt={type} />;
    default:
      return type;
  }
};
