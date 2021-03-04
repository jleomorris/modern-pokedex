import React from 'react';
// Styled components
import styled from 'styled-components';
// Redux
import { useSelector } from 'react-redux';
// Util
import { convertTypeToColor } from '../util';

const strengthsWeaknesses = ({ selectedPokemon }) => {
  // Redux
  const typeData = useSelector((state) => state.types.typeData);

  const typeDamageHandler = (damage) => {
    const currentCardTypes = selectedPokemon[0].types;
    const doubleDamageFrom = [];
    const doubleDamageTo = [];
    const halfDamageFrom = [];
    const halfDamageTo = [];
    const noDamageFrom = [];
    const noDamageTo = [];

    console.log('typeData', typeData);

    currentCardTypes.forEach((type) => {
      const filteredTypeData = typeData.filter(
        (data) => data.name === type.type.name
      );

      if (damage === 'doubleDamageFrom') {
        filteredTypeData[0].damage_relations.double_damage_from.forEach(
          (target) => {
            doubleDamageFrom.push(target.name);
          }
        );
      }

      if (damage === 'doubleDamageTo') {
        filteredTypeData[0].damage_relations.double_damage_to.forEach(
          (target) => {
            doubleDamageTo.push(target.name);
          }
        );
      }

      if (damage === 'halfDamageFrom') {
        filteredTypeData[0].damage_relations.half_damage_from.forEach(
          (target) => {
            halfDamageFrom.push(target.name);
          }
        );
      }
      if (damage === 'halfDamageTo') {
        filteredTypeData[0].damage_relations.half_damage_to.forEach(
          (target) => {
            halfDamageTo.push(target.name);
          }
        );
      }
      if (damage === 'noDamageFrom') {
        filteredTypeData[0].damage_relations.no_damage_from.forEach(
          (target) => {
            noDamageFrom.push(target.name);
          }
        );
      }
      if (damage === 'noDamageTo') {
        filteredTypeData[0].damage_relations.no_damage_to.forEach((target) => {
          noDamageTo.push(target.name);
        });
      }
    });

    // Convert each array into a set and back to an array to eliminate duplicates
    return {
      doubleDamageTo: Array.from(new Set(doubleDamageTo)),
      doubleDamageFrom: Array.from(new Set(doubleDamageFrom)),
      halfDamageFrom: Array.from(new Set(halfDamageFrom)),
      halfDamageTo: Array.from(new Set(halfDamageTo)),
      noDamageFrom: Array.from(new Set(noDamageFrom)),
      noDamageTo: Array.from(new Set(noDamageTo)),
    };
  };

  return (
    <StyledStrengthsWeaknesses className="strengths-weaknesses-container">
      <div className="double-damage-to">
        <h2>Double damage to</h2>
        {typeData && typeDamageHandler('doubleDamageTo').length === 0 && (
          <p className="none-message">None</p>
        )}
        {typeData &&
          typeDamageHandler('doubleDamageTo').doubleDamageTo.map((type) => (
            <p
              style={{
                background: convertTypeToColor(type),
              }}
              key={type}
            >
              {type}
            </p>
          ))}
      </div>
      <div className="double-damage-from">
        <h2>Double damage from</h2>
        {typeData && typeDamageHandler('doubleDamageFrom').length === 0 && (
          <p className="none-message">None</p>
        )}
        {typeData &&
          typeDamageHandler('doubleDamageFrom').doubleDamageFrom.map((type) => (
            <p
              style={{
                background: convertTypeToColor(type),
              }}
              key={type}
            >
              {type}
            </p>
          ))}
      </div>
      <div className="half-damage-from">
        <h2>Half damage from</h2>
        {typeData && typeDamageHandler('halfDamageFrom').length === 0 && (
          <p className="none-message">None</p>
        )}
        {typeData &&
          typeDamageHandler('halfDamageFrom').halfDamageFrom.map((type) => (
            <p
              style={{
                background: convertTypeToColor(type),
              }}
              key={type}
            >
              {type}
            </p>
          ))}
      </div>
      <div className="half-damage-to">
        <h2>Half damage to</h2>
        {typeData && typeDamageHandler('halfDamageTo').length === 0 && (
          <p className="none-message">None</p>
        )}
        {typeData &&
          typeDamageHandler('halfDamageTo').halfDamageTo.map((type) => (
            <p
              style={{
                background: convertTypeToColor(type),
              }}
              key={type}
            >
              {type}
            </p>
          ))}
      </div>
      <div className="no-damage-from">
        <h2>No damage from</h2>
        {typeData && typeDamageHandler('noDamageFrom').length === 0 && (
          <p className="none-message">None</p>
        )}
        {typeData &&
          typeDamageHandler('noDamageFrom').noDamageFrom.map((type) => (
            <p
              style={{
                background: convertTypeToColor(type),
              }}
              key={type}
            >
              {type}
            </p>
          ))}
      </div>
      <div className="no-damage-to">
        <h2>No damage to</h2>
        {typeData && typeDamageHandler('noDamageTo').length === 0 && (
          <p className="none-message">None</p>
        )}
        {typeData &&
          typeDamageHandler('noDamageTo').noDamageTo.map((type) => (
            <p
              style={{
                background: convertTypeToColor(type),
              }}
              key={type}
            >
              {type}
            </p>
          ))}
      </div>
    </StyledStrengthsWeaknesses>
  );
};

// Styled components
const StyledStrengthsWeaknesses = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 110%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;

  .double-damage-from,
  .double-damage-to,
  .half-damage-from,
  .half-damage-to,
  .no-damage-from,
  .no-damage-to {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 40%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 2rem;
    margin: 0.5rem 0.25rem;

    p {
      border-radius: 1rem;
      margin: 0.5rem;
      padding: 0.5rem 1rem;
      color: black;
    }

    .none-message {
      font-size: 1.5rem;
      color: white;
    }

    h2 {
      font-size: 1rem;
      color: white;
      margin: 1rem 0rem;
      width: 100%;
      text-align: center;
      text-shadow: 0px 5px 5px black;
    }

    .type-symbol {
      width: 60px;
      height: 60px;
      filter: drop-shadow(2px 4px 6px black);
    }
  }
`;

export default strengthsWeaknesses;
