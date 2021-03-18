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
  const [machineMoves, setmachineMoves] = useState();
  const [fullOwnMoveData, setFullOwnMoveData] = useState();
  const [fullMachineMoveData, setFullMachineMoveData] = useState();
  const [redBlueLevelUpMoves, setRedBlueLevelUpMoves] = useState(null);
  const [redBlueMachineMoves, setRedBlueMachineMoves] = useState(null);

  // Set up own moves and learnable moves
  useEffect(() => {
    const allMoves = selectedPokemon[0].moves.map((move) => move);
    const filteredOwnMoves = allMoves.filter(
      (move) => move.version_group_details[0].level_learned_at !== 0
    );
    const filteredLearnableMoves = allMoves.filter(
      (move) => move.version_group_details[0].level_learned_at === 0
    );
    const filteredMachineMoves = allMoves.filter(
      (move) =>
        move.version_group_details[0].move_learn_method.name === 'machine'
    );

    setOwnMoves(filteredOwnMoves);
    setmachineMoves(filteredMachineMoves);
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

  // Get full machine moves data
  useEffect(async () => {
    const allMachineMoveData = [];

    if (machineMoves.length > 0) {
      for (let i = 0; i < machineMoves.length; i += 1) {
        const eachMachineMovesData = await axios.get(machineMoves[i].move.url);

        allMachineMoveData.push(eachMachineMovesData.data);
      }

      await Promise.all(allMachineMoveData).then(() => {
        console.table('allMachineMoveData', allMachineMoveData);

        // merge with ownMoves to get version group data (level learned at)
        const mergedData = allMachineMoveData.map((move, i) => ({
          ...move,
          ...machineMoves[i],
        }));

        const machineMovesSortedByName = mergedData.sort((a, b) =>
          a.name > b.name ? 1 : -1
        );

        setFullMachineMoveData(machineMovesSortedByName);
      });
    }
  }, [machineMoves]);

  // Set red and blue version own move data
  useEffect(() => {
    if (fullOwnMoveData) {
      //   const redBlueMovesFiltered = fullOwnMoveData.filter(
      //     (move) =>
      //       move.version_group_details[0].version_group.name === 'red-blue'
      //   );
      const redBlueMovesFiltered = fullOwnMoveData.map((move) => move);
      const filteredLevelUpMovesUnique = [];

      for (let i = 0; i < redBlueMovesFiltered.length; i += 1) {
        for (const ver of redBlueMovesFiltered[i].version_group_details) {
          if (
            // ver.version_group.name === 'red-blue' &&
            ver.move_learn_method.name === 'level-up'
          ) {
            filteredLevelUpMovesUnique.push(redBlueMovesFiltered[i]);
            break;
          }
        }
      }

      // Sort moves by level ascending
      const levelUpMovesSortedByLevel = filteredLevelUpMovesUnique.sort(
        (a, b) =>
          a.version_group_details[0].level_learned_at >
          b.version_group_details[0].level_learned_at
            ? 1
            : -1
      );

      setRedBlueLevelUpMoves(levelUpMovesSortedByLevel);
    }
  }, [fullOwnMoveData]);

  return (
    <StyledMoves className="move-container">
      <h3>Own moves</h3>
      <table className="move-table">
        <thead>
          <tr>
            <th className="move-header show-on-mobile">Name</th>
            <th className="inner-heading show-on-mobile">Level learned</th>
            <th className="inner-heading">Accuracy</th>
            <th className="inner-heading show-on-mobile">Type</th>
            <th className="inner-heading show-on-mobile">Power</th>
            <th className="inner-heading">PP</th>
            <th className="inner-heading">Target</th>
            <th className="inner-heading">Damage class</th>
            <th className="inner-heading">Crit rate</th>
            <th className="inner-heading">Version</th>
          </tr>
        </thead>
        {redBlueLevelUpMoves &&
          redBlueLevelUpMoves.map((move) => (
            <tbody>
              <tr className="own-move" key={move.name}>
                <td className="own-move-title show-on-mobile">{move.name}</td>
                <td className="level-learned show-on-mobile">
                  {move.version_group_details[0].level_learned_at}
                </td>
                <td className="accuracy">
                  {move.accuracy ? move.accuracy : '-'}
                </td>
                <td className="type show-on-mobile">
                  {convertToTypeImage(move.type.name)}
                </td>
                <td className="power show-on-mobile">
                  {move.power ? move.power : '-'}
                </td>
                <td className="pp">{move.pp}</td>
                <td className="target">{move.target.name}</td>
                <td className="damage-class">
                  {convertDamageClassToImage(move.damage_class.name)}
                </td>
                <td className="power">{move.meta.crit_rate}</td>
                <td className="version">
                  {move.version_group_details[0].version_group.name}
                </td>
              </tr>
            </tbody>
          ))}
      </table>
      <h3>Machine moves</h3>
      <table className="move-table">
        <tr>
          <th className="move-header show-on-mobile">Name</th>
          <th className="inner-heading">Accuracy</th>
          <th className="inner-heading show-on-mobile">Type</th>
          <th className="inner-heading show-on-mobile">Power</th>
          <th className="inner-heading">PP</th>
          <th className="inner-heading">Target</th>
          <th className="inner-heading">Damage class</th>
          <th className="inner-heading">Crit rate</th>
          <th className="inner-heading">Version</th>
        </tr>
        {fullMachineMoveData &&
          fullMachineMoveData.map((move) => (
            <tr className="own-move" key={move.name}>
              <td className="own-move-title show-on-mobile">{move.name}</td>
              <td className="accuracy">
                {move.accuracy ? move.accuracy : '-'}
              </td>
              <td className="type show-on-mobile">
                {convertToTypeImage(move.type.name)}
              </td>
              <td className="power show-on-mobile">
                {move.power ? move.power : '-'}
              </td>
              <td className="pp">{move.pp}</td>
              <td className="target">{move.target.name}</td>
              <td className="damage-class">
                {convertDamageClassToImage(move.damage_class.name)}
              </td>
              <td className="power">{move.meta.crit_rate}</td>
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

  @media (max-width: 1500px) {
    width: 90%;
  }

  /* @media (max-width: 1700px) {
    width: 50%;
  } */

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

    @media (max-width: 800px) {
      tr {
        display: flex;
      }

      .show-on-mobile {
        display: block !important;
        flex: 1;
      }
    }

    th {
      color: white;
      background: #88888878;
      padding: 0.5rem 1rem;

      @media (max-width: 800px) {
        display: none;
        flex: 1;
      }
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
        /* padding: 1rem 2rem; */
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

      @media (max-width: 800px) {
        .show-on-mobile {
          display: block !important;
        }
      }

      td {
        padding: 1rem 0.5rem;
        text-align: center;

        @media (max-width: 800px) {
          display: none;
        }
      }
    }
  }
`;

export default Moves;
