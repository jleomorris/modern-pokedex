import React from 'react';
// Styled components
import styled from 'styled-components';
// Util
import { convertTypeToColor } from '../util';
// Components
import StatChart from './StatChart';

const Abilities = ({ abilityData, selectedPokemon }) => {
  return (
    <StyledContainer className="statchart-abilities-container">
      <StatChart selectedPokemon={selectedPokemon} />
      <StyledAbilities className="abilities-container">
        <h3>Abilities</h3>
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
              <p className="ability-title">
                {ability.name}
                <span className="ability-generation">
                  ({ability.generation.name})
                </span>
              </p>
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
    </StyledContainer>
  );
};

// Styled components
const StyledContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 2rem;

  @media (max-width: 1500px) {
    width: 90%;
    margin-top: 10rem;
  }
`;

const StyledAbilities = styled.div`
  width: 45%;
  /* padding: 2rem; */
  /* margin: 2rem 0rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    margin-top: -14rem;
  }

  h3 {
    color: white;
    width: 100%;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .ability {
    border-radius: 1rem;
    padding: 2rem;
    margin: 1rem 1rem;

    .ability-title {
      text-transform: capitalize;
      font-weight: 900;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      text-shadow: 0px 0px 5px black;

      .ability-generation {
        font-size: 0.75rem;
        color: black;
        text-transform: none;
        text-shadow: none;
        margin-left: 0.25rem;
      }
    }

    .ability-description {
      color: black;
    }
  }
`;

export default Abilities;
