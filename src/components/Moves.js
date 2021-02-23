import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Moves = ({ selectedPokemon }) => {
  // State
  const [ownMoves, setOwnMoves] = useState();
  const [canLearn, setCanLearn] = useState();
  const [fullMoveData, setFullMoveData] = useState();

  // Set up own moves and learnable moves
  useEffect(() => {
    const allMoves = selectedPokemon[0].moves.map((move) => move);
    const filteredOwnMoves = allMoves.filter(
      (move) => move.version_group_details[0].level_learned_at !== 0
    );
    const filteredLearnableMoves = allMoves.filter(
      (move) => move.version_group_details[0].level_learned_at === 0
    );

    setOwnMoves(filteredOwnMoves);
    setCanLearn(filteredLearnableMoves);
  }, [selectedPokemon]);

  return (
    <StyledMoves className="move-container">
      <h3>Own moves</h3>
      <table className="move-table">
        <tr>
          <th className="move-header">Name</th>
          <th className="level-method-version-header">
            <th className="inner-heading">Level learned</th>
            <th className="inner-heading">Method</th>
            <th className="inner-heading">Version</th>
          </th>
        </tr>
        {ownMoves &&
          ownMoves
            .filter(
              (move) =>
                move.version_group_details[0].version_group.name === 'red-blue'
            )
            .map((move) => (
              <tr className="own-move" key={move.move.name}>
                <td className="own-move-title">{move.move.name}</td>
                <td>
                  {move.version_group_details
                    .filter(
                      (ver) =>
                        ver.version_group.name === 'red-blue' &&
                        ver.move_learn_method.name === 'level-up'
                    )
                    .map((moveDetails) => (
                      <>
                        <tr className="table-row-container">
                          <td className="level-learned">
                            {moveDetails.level_learned_at}
                          </td>
                          <td className="learn-method">
                            {moveDetails.move_learn_method.name}
                          </td>
                          <td className="version">
                            {moveDetails.version_group.name}
                          </td>
                        </tr>
                      </>
                    ))}
                </td>
              </tr>
            ))}
      </table>
    </StyledMoves>
  );
};

// Styled components
const StyledMoves = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 1700px) {
    width: 50%;
  }

  h3 {
    color: white;
    width: 100%;
    text-transform: uppercase;
    margin: 1rem 0rem;
    margin: 2rem 0rem;
  }

  .move-table {
    margin: 2rem 0rem;
    width: 50%;
    color: white;
    background: rgba(256, 256, 256, 0.1);

    th {
      color: white;
    }

    .move-header {
      padding: 1rem 0rem;
      background: #88888878;
    }

    .level-method-version-header {
      background: #88888878;
      padding: 1rem 0rem;
      display: flex;
      justify-content: center;

      .inner-heading {
        width: 33%;
      }
    }

    .own-move {
      .own-move-title {
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        font-weight: 900;
      }

      .table-row-container {
        display: block;
        width: 100%;
      }

      .level-learned,
      .learn-method,
      .version {
        padding: 0.25rem;
        text-align: center;
        width: 33%;
        display: inline-block;
      }
    }
  }
`;

export default Moves;
