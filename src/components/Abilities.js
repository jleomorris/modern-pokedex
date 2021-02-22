import React from 'react';
// Styled components
import styled from 'styled-components';
// Util
import { convertTypeToColor } from '../util';

const Abilities = ({ abilityData, selectedPokemon }) => {
  return (
    <StyledAbilities className="abilities-container">
      {abilityData &&
        abilityData.map((ability) => (
          <div
            key={ability.name}
            className="ability"
            style={{
              background: convertTypeToColor(
                selectedPokemon[0].types[0].type.name
              ),
            }}
          >
            <p className="ability-title">{ability.name}</p>
            {ability.effect_entries
              .filter((entry) => entry.language.name === 'en')
              .map((abilityDescription) => (
                <p className="ability-description">
                  {abilityDescription.effect}
                </p>
              ))}
          </div>
        ))}
    </StyledAbilities>
  );
};

// Styled components
const StyledAbilities = styled.div`
  width: 70%;
  padding: 2rem;
  margin: 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .ability {
    border-radius: 1rem;
    padding: 1rem;
    margin: 0rem 1rem;

    .ability-title {
      text-transform: capitalize;
      font-weight: 900;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      text-shadow: 0px 0px 5px black;
    }

    .ability-description {
      color: black;
    }
  }
`;

export default Abilities;
