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
      <table className="strengths-weaknesses-table">
        <thead>
          <th className="move-header">Damage type</th>
          <th className="inner-heading">Affected types</th>
        </thead>
        <tbody>
          <tr>
            <td>Double damage to</td>
            <td>
              {typeData &&
                typeDamageHandler('doubleDamageTo').doubleDamageTo.map(
                  (type) => (
                    <p
                      style={{
                        background: convertTypeToColor(type),
                      }}
                      key={type}
                    >
                      {type}
                    </p>
                  )
                )}
            </td>
          </tr>
          <tr>
            <td>Double damage from</td>
            <td>
              {typeData &&
                typeDamageHandler('doubleDamageFrom').doubleDamageFrom.map(
                  (type) => (
                    <p
                      style={{
                        background: convertTypeToColor(type),
                      }}
                      key={type}
                    >
                      {type}
                    </p>
                  )
                )}
            </td>
          </tr>
          <tr>
            <td>Half damage to</td>
            <td>
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
            </td>
          </tr>
          <tr>
            <td>Half damage From</td>
            <td>
              {typeData &&
                typeDamageHandler('halfDamageFrom').halfDamageFrom.map(
                  (type) => (
                    <p
                      style={{
                        background: convertTypeToColor(type),
                      }}
                      key={type}
                    >
                      {type}
                    </p>
                  )
                )}
            </td>
          </tr>
          <tr>
            <td>No damage to</td>
            <td>
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
            </td>
          </tr>
          <tr>
            <td>No damage from</td>
            <td>
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
            </td>
          </tr>
        </tbody>
      </table>
    </StyledStrengthsWeaknesses>
  );
};

// Styled components
const StyledStrengthsWeaknesses = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 110%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;

  table {
    width: 100%;
    background: rgba(0, 0, 0, 0.6);

    thead {
      color: white;
      background: #88888878;
    }

    td {
      color: white;
      padding: 0.25rem;

      p {
        border-radius: 1rem;
        margin: 0.5rem;
        padding: 0.25rem 0.5rem;
        color: black;
        width: fit-content;
        display: inline-block;
      }

      .none-message {
        font-size: 1.5rem;
        color: white;
      }
    }
  }
`;

export default strengthsWeaknesses;
