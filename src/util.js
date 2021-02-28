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
// Damage classes (from https://pokemondb.net)
import movePhysical from './img/move-physical.png';
import moveSpecial from './img/move-special.png';
import moveStatus from './img/move-status.png';
// Stat icons
import healthIcon from './img/stats/health.svg';
import attackIcon from './img/stats/attack.svg';
import defenseIcon from './img/stats/defense.svg';
import specialAttackIcon from './img/stats/special_attack.svg';
import specialDefenseIcon from './img/stats/special_defense.svg';
import speedIcon from './img/stats/speed.svg';

export const typeImages = [
  { type: 'fire', image: fireType },
  { type: 'bug', image: bugType },
  { type: 'dark', image: darkType },
  { type: 'dragon', image: dragonType },
  { type: 'electric', image: electricType },
  { type: 'fairy', image: fairyType },
  { type: 'fighting', image: fightingType },
  { type: 'flying', image: flyingType },
  { type: 'ghost', image: ghostType },
  { type: 'grass', image: grassType },
  { type: 'ground', image: groundType },
  { type: 'ice', image: iceType },
  { type: 'normal', image: normalType },
  { type: 'poison', image: poisonType },
  { type: 'psychic', image: psychicType },
  { type: 'rock', image: rockType },
  { type: 'steel', image: steelType },
  { type: 'water', image: waterType },
];

export const convertMaxStatToIcon = (maxStat) => {
  switch (maxStat) {
    case 'hp':
      return (
        <img
          className="health-stat-icon stat-icon"
          src={healthIcon}
          alt="health icon"
        />
      );
    case 'attack':
      return (
        <img
          className="attack-stat-icon stat-icon"
          src={attackIcon}
          alt="attack icon"
        />
      );
    case 'defense':
      return (
        <img
          className="defense-stat-icon stat-icon"
          src={defenseIcon}
          alt="defense icon"
        />
      );
    case 'special-attack':
      return (
        <img
          className="special-attack-stat-icon stat-icon"
          src={specialAttackIcon}
          alt="special attack icon"
        />
      );
    case 'special-defense':
      return (
        <img
          className="special-defense-stat-icon stat-icon"
          src={specialDefenseIcon}
          alt="special defense icon"
        />
      );
    case 'speed':
      return (
        <img
          className="speed-stat-icon stat-icon"
          src={speedIcon}
          alt="speed icon"
        />
      );
    default:
      return maxStat;
  }
};

export const convertDamageClassToImage = (damageClass) => {
  switch (damageClass) {
    case 'physical':
      return (
        <img
          className="damage-class-symbol"
          src={movePhysical}
          alt="physical move"
          title="physical"
        />
      );
    case 'special':
      return (
        <img
          className="damage-class-symbol"
          src={moveSpecial}
          alt="special move"
          title="special"
        />
      );
    case 'status':
      return (
        <img
          className="damage-class-symbol"
          src={moveStatus}
          alt="status move"
          title="status"
        />
      );
    default:
      return damageClass;
  }
};

export const convertToTypeImage = (type) => {
  switch (type) {
    case 'fire':
      return (
        <img className="type-symbol" src={fireType} alt={type} title="fire" />
      );
    case 'bug':
      return (
        <img className="type-symbol" src={bugType} alt={type} title="bug" />
      );
    case 'dark':
      return (
        <img className="type-symbol" src={darkType} alt={type} title="dark" />
      );
    case 'dragon':
      return (
        <img
          className="type-symbol"
          src={dragonType}
          alt={type}
          title="dragon"
        />
      );
    case 'electric':
      return (
        <img
          className="type-symbol"
          src={electricType}
          alt={type}
          title="electric"
        />
      );
    case 'fairy':
      return (
        <img className="type-symbol" src={fairyType} alt={type} title="fairy" />
      );
    case 'fighting':
      return (
        <img
          className="type-symbol"
          src={fightingType}
          alt={type}
          title="fighting"
        />
      );
    case 'flying':
      return (
        <img
          className="type-symbol"
          src={flyingType}
          alt={type}
          title="flying"
        />
      );
    case 'ghost':
      return (
        <img className="type-symbol" src={ghostType} alt={type} title="ghost" />
      );
    case 'grass':
      return (
        <img className="type-symbol" src={grassType} alt={type} title="grass" />
      );
    case 'ground':
      return (
        <img
          className="type-symbol"
          src={groundType}
          alt={type}
          title="ground"
        />
      );
    case 'ice':
      return (
        <img className="type-symbol" src={iceType} alt={type} title="ice" />
      );
    case 'normal':
      return (
        <img
          className="type-symbol"
          src={normalType}
          alt={type}
          title="normal"
        />
      );
    case 'poison':
      return (
        <img
          className="type-symbol"
          src={poisonType}
          alt={type}
          title="poison"
        />
      );
    case 'psychic':
      return (
        <img
          className="type-symbol"
          src={psychicType}
          alt={type}
          title="psychic"
        />
      );
    case 'rock':
      return (
        <img className="type-symbol" src={rockType} alt={type} title="rock" />
      );
    case 'steel':
      return (
        <img className="type-symbol" src={steelType} alt={type} title="steel" />
      );
    case 'water':
      return (
        <img className="type-symbol" src={waterType} alt={type} title="water" />
      );
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

export const convertTypeToColor = (type) => {
  switch (type) {
    case 'bug':
      return 'linear-gradient(to right, #f9fcc4, #45b649)';
    case 'dark':
      return 'linear-gradient(to right, #ffc0cb, #800080)';
    case 'dragon':
      return 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)';
    case 'electric':
      return 'linear-gradient(to right, #fffee4, #c5ca7d)';
    case 'fairy':
      return 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)';
    case 'fighting':
      return 'linear-gradient(to right, #fff0d1, #ceac5d, #ae9018)';
    case 'fire':
      return 'linear-gradient(to right, #ed4264, #ffedbc)';
    case 'flying':
      return 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)';
    case 'ghost':
      return 'linear-gradient(to right, #ffc0cb, #800080)';
    case 'grass':
      return 'linear-gradient(to right, #56ab2f, #a8e063)';
    case 'ground':
      return 'linear-gradient(to right, #fff0d1, #ceac5d, #ae9018)';
    case 'ice':
      return 'linear-gradient(to right, #2980b9, #6dd5fa, #d5e0f8)';
    case 'normal':
      return 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)';
    case 'poison':
      return 'linear-gradient(to right, #56ab2f, #a8e063)';
    case 'psychic':
      return 'linear-gradient(to right, #f4c4f3, #fc67fa)';
    case 'rock':
      return 'linear-gradient(to right, #fff0d1, #ceac5d, #ae9018)';
    case 'steel':
      return 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)';
    case 'water':
      return 'linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)';
    default:
      return '#dde4ea';
  }
};

export const resolveUndefined = (a, b) => {
  // debugger;

  if (a === undefined) {
    return a;
  }
  return b;
};
