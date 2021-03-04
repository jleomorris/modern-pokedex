import React, { useState, useEffect } from 'react';
// Styled components
import styled from 'styled-components';
// Axios
import axios from 'axios';
// Util
import { convertToTypeImage, convertDamageClassToImage } from '../util';

const Moves = ({ selectedPokemon }) => {
  // State
  const [ownMoves, setOwnMoves] = useState();
  const [canLearn, setCanLearn] = useState();
  const [fullOwnMoveData, setFullOwnMoveData] = useState();
  const [redBlueMoves, setRedBlueMoves] = useState(null);

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

  // Get full own moves data
  useEffect(async () => {
    const allOwnMoveData = [];

    if (ownMoves.length > 0) {
      for (let i = 0; i < ownMoves.length; i += 1) {
        const eachOwnMovesData = await axios.get(ownMoves[i].move.url);

        allOwnMoveData.push(eachOwnMovesData.data);
      }

      await Promise.all(allOwnMoveData).then(() => {
        console.table('allOwnMoveData', allOwnMoveData);

        // merge with ownMoves to get version group data (level learned at)
        const mergedData = allOwnMoveData.map((move, i) => ({
          ...move,
          ...ownMoves[i],
        }));

        setFullOwnMoveData(mergedData);
      });
    }
  }, [ownMoves]);

  // Set red and blue version move data
  useEffect(() => {
    if (fullOwnMoveData) {
      const redBlueMovesFiltered = fullOwnMoveData.filter(
        (move) =>
          move.version_group_details[0].version_group.name === 'red-blue'
      );

      const filteredMovesUnique = [];

      for (let i = 0; i < redBlueMovesFiltered.length; i += 1) {
        for (const ver of redBlueMovesFiltered[i].version_group_details) {
          if (
            ver.version_group.name === 'red-blue' &&
            ver.move_learn_method.name === 'level-up'
          ) {
            filteredMovesUnique.push(redBlueMovesFiltered[i]);
            break;
          }
        }
      }

      // Sort moves by level ascending
      const sortedByLevel = filteredMovesUnique.sort((a, b) =>
        a.version_group_details[0].level_learned_at >
        b.version_group_details[0].level_learned_at
          ? 1
          : -1
      );

      setRedBlueMoves(sortedByLevel);
    }
  }, [fullOwnMoveData]);

  return (
    <StyledMoves className="move-container">
      <h3>Own moves</h3>
      <table className="move-table">
        <tr>
          <th className="move-header">Name</th>
          <th className="inner-heading">Accuracy</th>
          <th className="inner-heading">Type</th>
          <th className="inner-heading">Power</th>
          <th className="inner-heading">PP</th>
          <th className="inner-heading">Target</th>
          <th className="inner-heading">Damage class</th>
          <th className="inner-heading">Crit rate</th>
          <th className="inner-heading">Level learned</th>
          <th className="inner-heading">Version</th>
        </tr>
        {redBlueMoves &&
          redBlueMoves.map((move) => (
            <tr className="own-move" key={move.name}>
              <td className="own-move-title">{move.name}</td>
              <td className="accuracy">
                {move.accuracy ? move.accuracy : '-'}
              </td>
              <td className="type">{convertToTypeImage(move.type.name)}</td>
              <td className="power">{move.power ? move.power : '-'}</td>
              <td className="pp">{move.pp}</td>
              <td className="target">{move.target.name}</td>
              <td className="damage-class">
                {convertDamageClassToImage(move.damage_class.name)}
              </td>
              <td className="power">{move.meta.crit_rate}</td>
              <td className="level-learned">
                {move.version_group_details[0].level_learned_at}
              </td>
              <td className="version">
                {move.version_group_details[0].version_group.name}
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
    margin: 2rem 0rem;
  }

  .move-table {
    margin: 2rem 0rem;
    width: 100%;
    color: white;
    background: rgba(256, 256, 256, 0.1);

    th {
      color: white;
      background: #88888878;
      padding: 0.5rem 1rem;
    }

    .type {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 35px;
      }
    }

    .damage-class {
      img {
        height: 35px;
        width: 35px;
      }
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

      td {
        padding: 0.25rem;
        text-align: center;
      }
    }
  }
`;

export default Moves;
