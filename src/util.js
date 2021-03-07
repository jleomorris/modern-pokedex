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
// Stone icons
import fireStone from './img/stones/fire_stone.png';
import waterStone from './img/stones/water_stone.png';
import thunderStone from './img/stones/thunder_stone.png';
import iceStone from './img/stones/ice_stone.png';
import moonStone from './img/stones/moon_stone.png';
import leafStone from './img/stones/leaf_stone.png';
// Version logos
import redLogo from './img/logos/red.png';
import blueLogo from './img/logos/blue.png';
import yellowLogo from './img/logos/yellow.png';
import greenLogo from './img/logos/green.png';
import goldLogo from './img/logos/gold.png';
import silverLogo from './img/logos/silver.png';
import crystalLogo from './img/logos/crystal.png';
import rubyLogo from './img/logos/ruby.png';
import sapphireLogo from './img/logos/sapphire.png';
import emeraldLogo from './img/logos/emerald.png';
import diamondLogo from './img/logos/diamond.png';
import pearlLogo from './img/logos/pearl.png';
import platinumLogo from './img/logos/platinum.png';
import blackLogo from './img/logos/black.png';
import black2Logo from './img/logos/black_2.png';
import whiteLogo from './img/logos/white.png';
import white2Logo from './img/logos/white_2.png';
import xLogo from './img/logos/x.png';
import yLogo from './img/logos/y.png';
import soulSilverLogo from './img/logos/soul_silver.png';
import heartGoldLogo from './img/logos/heart_gold.png';
import fireRedLogo from './img/logos/fire_red.png';
import leafGreenLogo from './img/logos/leaf_green.png';

export const removeNonAscii = (string) => {
  let removedNonAscii = string.toString();
  removedNonAscii = removedNonAscii.replace(/é/g, 'e'); // Replace é in Pokémon to Pokemon;
  removedNonAscii = removedNonAscii.replace(/[^\x20-\x7E]/g, ' '); // Remove all non ascii

  return removedNonAscii;
};

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

export const reactSelectTypeOptions = [
  { value: 'reset', label: 'All', image: fireType },
  { value: 'fire', label: 'Fire', image: fireType },
  { value: 'bug', label: 'Bug', image: bugType },
  { value: 'dark', label: 'Dark', image: darkType },
  { value: 'dragon', label: 'Dragon', image: dragonType },
  { value: 'electric', label: 'Electric', image: electricType },
  { value: 'fairy', label: 'Fairy', image: fairyType },
  { value: 'fighting', label: 'Fighting', image: fightingType },
  { value: 'flying', label: 'Flying', image: flyingType },
  { value: 'ghost', label: 'Ghost', image: ghostType },
  { value: 'grass', label: 'Grass', image: grassType },
  { value: 'ground', label: 'Ground', image: groundType },
  { value: 'ice', label: 'Ice', image: iceType },
  { value: 'normal', label: 'Normal', image: normalType },
  { value: 'poison', label: 'Poison', image: poisonType },
  { value: 'psychic', label: 'Psychic', image: psychicType },
  { value: 'rock', label: 'Rock', image: rockType },
  { value: 'steel', label: 'Steel', image: steelType },
  { value: 'water', label: 'Water', image: waterType },
];

export const reactSelectStatOptions = [
  { value: 'reset', label: 'All' },
  { value: 'hp', label: 'Health' },
  { value: 'attack', label: 'Attack' },
  { value: 'defense', label: 'Defense', image: bugType },
  { value: 'special-attack', label: 'Special Attack', image: darkType },
  { value: 'special-defense', label: 'Special Defense', image: dragonType },
  { value: 'speed', label: 'Speed', image: electricType },
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

export const convertEvolutionStoneToImage = (stone) => {
  switch (stone) {
    case 'fire-stone':
      return (
        <img
          className="fire-stone evolution-stone"
          src={fireStone}
          alt="fire stone"
        />
      );
    case 'water-stone':
      return (
        <img
          className="water-stone evolution-stone"
          src={waterStone}
          alt="water stone"
        />
      );
    case 'ice-stone':
      return (
        <img
          className="ice-stone evolution-stone"
          src={iceStone}
          alt="ice stone"
        />
      );
    case 'thunder-stone':
      return (
        <img
          className="thunder-stone evolution-stone"
          src={thunderStone}
          alt="thunder stone"
        />
      );
    case 'moon-stone':
      return (
        <img
          className="moon-stone evolution-stone"
          src={moonStone}
          alt="moon stone"
        />
      );
    case 'leaf-stone':
      return (
        <img
          className="leaf-stone evolution-stone"
          src={leafStone}
          alt="leaf stone"
        />
      );
    default:
      return stone;
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

export const convertGameVersionToImage = (version) => {
  switch (version) {
    case 'Red':
      return (
        <img className="version-logo" src={redLogo} alt="pokemon red logo" />
      );
    case 'Blue':
      return (
        <img className="version-logo" src={blueLogo} alt="pokemon blue logo" />
      );
    case 'Yellow':
      return (
        <img
          className="version-logo"
          src={yellowLogo}
          alt="pokemon yellow logo"
        />
      );
    case 'Green':
      return (
        <img
          className="version-logo"
          src={greenLogo}
          alt="pokemon green logo"
        />
      );
    case 'Gold':
      return (
        <img className="version-logo" src={goldLogo} alt="pokemon gold logo" />
      );
    case 'Silver':
      return (
        <img
          className="version-logo"
          src={silverLogo}
          alt="pokemon silver logo"
        />
      );
    case 'Crystal':
      return (
        <img
          className="version-logo"
          src={crystalLogo}
          alt="pokemon crystal logo"
        />
      );
    case 'Ruby':
      return (
        <img className="version-logo" src={rubyLogo} alt="pokemon ruby logo" />
      );
    case 'Sapphire':
      return (
        <img
          className="version-logo"
          src={sapphireLogo}
          alt="pokemon sapphire logo"
        />
      );
    case 'Emerald':
      return (
        <img
          className="version-logo"
          src={emeraldLogo}
          alt="pokemon emerald logo"
        />
      );
    case 'Diamond':
      return (
        <img
          className="version-logo"
          src={diamondLogo}
          alt="pokemon diamond logo"
        />
      );
    case 'Pearl':
      return (
        <img
          className="version-logo"
          src={pearlLogo}
          alt="pokemon pearl logo"
        />
      );
    case 'Platinum':
      return (
        <img
          className="version-logo"
          src={platinumLogo}
          alt="pokemon platinum logo"
        />
      );
    case 'Black':
      return (
        <img
          className="version-logo"
          src={blackLogo}
          alt="pokemon black logo"
        />
      );
    case 'White':
      return (
        <img
          className="version-logo"
          src={whiteLogo}
          alt="pokemon white logo"
        />
      );
    case 'Black 2':
      return (
        <img
          className="version-logo"
          src={black2Logo}
          alt="pokemon white logo"
        />
      );
    case 'White 2':
      return (
        <img
          className="version-logo"
          src={white2Logo}
          alt="pokemon white logo"
        />
      );
    case 'X':
      return <img className="version-logo" src={xLogo} alt="pokemon X logo" />;
    case 'Y':
      return <img className="version-logo" src={yLogo} alt="pokemon Y logo" />;
    case 'Soul silver':
      return (
        <img
          className="version-logo"
          src={soulSilverLogo}
          alt="pokemon soul silver logo"
        />
      );
    case 'Heart gold':
      return (
        <img
          className="version-logo"
          src={heartGoldLogo}
          alt="pokemon heart gold logo"
        />
      );
    case 'Fire red':
      return (
        <img
          className="version-logo"
          src={fireRedLogo}
          alt="pokemon fire red logo"
        />
      );
    case 'Leaf green':
      return (
        <img
          className="version-logo"
          src={leafGreenLogo}
          alt="pokemon leaf green logo"
        />
      );
    default:
      return version;
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
