import React from 'react';
// Images
import fireType from './img/pokemon_type_symbols/fire.png';
import bugType from './img/pokemon_type_symbols/bug.png';
import darkType from './img/pokemon_type_symbols/dark.png';
import dragonType from './img/pokemon_type_symbols/dragon.png';
import electricType from './img/pokemon_type_symbols/electric.png';
import fairyType from './img/pokemon_type_symbols/fairy.png';
import fightingType from './img/pokemon_type_symbols/fighting.png';
import flyingType from './img/pokemon_type_symbols/flying.png';
import ghostType from './img/pokemon_type_symbols/ghost.png';
import grassType from './img/pokemon_type_symbols/grass.png';
import groundType from './img/pokemon_type_symbols/ground.png';
import iceType from './img/pokemon_type_symbols/ice.png';
import normalType from './img/pokemon_type_symbols/normal.png';
import poisonType from './img/pokemon_type_symbols/poison.png';
import psychicType from './img/pokemon_type_symbols/psychic.png';
import rockType from './img/pokemon_type_symbols/rock.png';
import steelType from './img/pokemon_type_symbols/steel.png';
import waterType from './img/pokemon_type_symbols/water.png';
import fireBackground from './img/card_backgrounds/fire.jpeg';
import bugBackground from './img/card_backgrounds/bug.jpeg';
import darkBackground from './img/card_backgrounds/dark.jpeg';
import dragonBackground from './img/card_backgrounds/dragon.jpeg';
import electricBackground from './img/card_backgrounds/electric.jpeg';
import fairyBackground from './img/card_backgrounds/fairy.jpeg';
import fightingBackground from './img/card_backgrounds/fighting.jpeg';
import flyingBackground from './img/card_backgrounds/flying.jpeg';
import ghostBackground from './img/card_backgrounds/ghost.jpeg';
import grassBackground from './img/card_backgrounds/grass.jpeg';
import groundBackground from './img/card_backgrounds/ground.jpeg';
import iceBackground from './img/card_backgrounds/ice.jpeg';
import normalBackground from './img/card_backgrounds/normal.jpeg';
import poisonBackground from './img/card_backgrounds/poison.jpg';
import psychicBackground from './img/card_backgrounds/psychic.jpeg';
import rockBackground from './img/card_backgrounds/rock.jpeg';
import steelBackground from './img/card_backgrounds/steel.jpeg';
import waterBackground from './img/card_backgrounds/water.jpeg';

export const convertToTypeImage = (type) => {
  switch (type) {
    case 'fire':
      return <img src={fireType} alt={type} />;
    case 'bug':
      return <img src={bugType} alt={type} />;
    case 'dark':
      return <img src={darkType} alt={type} />;
    case 'dragon':
      return <img src={dragonType} alt={type} />;
    case 'electric':
      return <img src={electricType} alt={type} />;
    case 'fairy':
      return <img src={fairyType} alt={type} />;
    case 'fighting':
      return <img src={fightingType} alt={type} />;
    case 'flying':
      return <img src={flyingType} alt={type} />;
    case 'ghost':
      return <img src={ghostType} alt={type} />;
    case 'grass':
      return <img src={grassType} alt={type} />;
    case 'ground':
      return <img src={groundType} alt={type} />;
    case 'ice':
      return <img src={iceType} alt={type} />;
    case 'normal':
      return <img src={normalType} alt={type} />;
    case 'poison':
      return <img src={poisonType} alt={type} />;
    case 'psychic':
      return <img src={psychicType} alt={type} />;
    case 'rock':
      return <img src={rockType} alt={type} />;
    case 'steel':
      return <img src={steelType} alt={type} />;
    case 'water':
      return <img src={waterType} alt={type} />;
    default:
      return type;
  }
};
export const convertToTypeBackground = (type) => {
  switch (type) {
    case 'fire':
      return (
        <img className="background-image" src={fireBackground} alt={type} />
      );
    case 'bug':
      return (
        <img className="background-image" src={bugBackground} alt={type} />
      );
    case 'dark':
      return (
        <img className="background-image" src={darkBackground} alt={type} />
      );
    case 'dragon':
      return (
        <img className="background-image" src={dragonBackground} alt={type} />
      );
    case 'electric':
      return (
        <img className="background-image" src={electricBackground} alt={type} />
      );
    case 'fairy':
      return (
        <img className="background-image" src={fairyBackground} alt={type} />
      );
    case 'fighting':
      return (
        <img className="background-image" src={fightingBackground} alt={type} />
      );
    case 'flying':
      return (
        <img className="background-image" src={flyingBackground} alt={type} />
      );
    case 'ghost':
      return (
        <img className="background-image" src={ghostBackground} alt={type} />
      );
    case 'grass':
      return (
        <img className="background-image" src={grassBackground} alt={type} />
      );
    case 'ground':
      return (
        <img className="background-image" src={groundBackground} alt={type} />
      );
    case 'ice':
      return (
        <img className="background-image" src={iceBackground} alt={type} />
      );
    case 'normal':
      return (
        <img className="background-image" src={normalBackground} alt={type} />
      );
    case 'poison':
      return (
        <img className="background-image" src={poisonBackground} alt={type} />
      );
    case 'psychic':
      return (
        <img className="background-image" src={psychicBackground} alt={type} />
      );
    case 'rock':
      return (
        <img className="background-image" src={rockBackground} alt={type} />
      );
    case 'steel':
      return (
        <img className="background-image" src={steelBackground} alt={type} />
      );
    case 'water':
      return (
        <img className="background-image" src={waterBackground} alt={type} />
      );
    default:
      return type;
  }
};