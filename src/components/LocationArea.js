import React, { useState, useEffect } from 'react';
// Styled components
import styled from 'styled-components';
// Axios
import axios from 'axios';
// Util
import { convertGameVersionToImage } from '../util';

const LocationArea = ({ selectedPokemon }) => {
  // State
  const [locationAreaEncounters, setLocationAreaEncounters] = useState();

  // Get location area data
  useEffect(() => {
    axios
      .get(selectedPokemon[0].location_area_encounters)
      .then((response) => {
        // debugger;
        // handle success
        console.log('response', response);

        const locationData = response.data;

        const diamond = [];
        const pearl = [];
        const platinum = [];
        const gold = [];
        const silver = [];
        const crystal = [];
        const soulSilver = [];
        const heartGold = [];
        const red = [];
        const blue = [];
        const yellow = [];
        const green = [];
        const fireRed = [];
        const leafGreen = [];
        const x = [];
        const y = [];
        const ruby = [];
        const sapphire = [];
        const emerald = [];
        const black = [];
        const white = [];
        const black2 = [];
        const white2 = [];

        locationData.forEach((location) => {
          location.version_details.forEach((ver) => {
            if (ver.version.name === 'diamond')
              diamond.push(location.location_area.name);
            if (ver.version.name === 'pearl')
              pearl.push(location.location_area.name);
            if (ver.version.name === 'platinum')
              platinum.push(location.location_area.name);
            if (ver.version.name === 'gold')
              gold.push(location.location_area.name);
            if (ver.version.name === 'silver')
              silver.push(location.location_area.name);
            if (ver.version.name === 'crystal')
              crystal.push(location.location_area.name);
            if (ver.version.name === 'soulsilver')
              soulSilver.push(location.location_area.name);
            if (ver.version.name === 'heartgold')
              heartGold.push(location.location_area.name);
            if (ver.version.name === 'red')
              red.push(location.location_area.name);
            if (ver.version.name === 'blue')
              blue.push(location.location_area.name);
            if (ver.version.name === 'yellow')
              yellow.push(location.location_area.name);
            if (ver.version.name === 'green')
              green.push(location.location_area.name);
            if (ver.version.name === 'firered')
              fireRed.push(location.location_area.name);
            if (ver.version.name === 'leafgreen')
              leafGreen.push(location.location_area.name);
            if (ver.version.name === 'x') x.push(location.location_area.name);
            if (ver.version.name === 'y') y.push(location.location_area.name);
            if (ver.version.name === 'ruby')
              ruby.push(location.location_area.name);
            if (ver.version.name === 'sapphire')
              sapphire.push(location.location_area.name);
            if (ver.version.name === 'emerald')
              emerald.push(location.location_area.name);
            if (ver.version.name === 'black-2')
              black2.push(location.location_area.name);
            if (ver.version.name === 'white-2')
              white2.push(location.location_area.name);
            if (ver.version.name === 'black')
              black.push(location.location_area.name);
            if (ver.version.name === 'white')
              white.push(location.location_area.name);
          });
        });

        const allVersionData = [
          { name: 'Red', areas: red },
          { name: 'Blue', areas: blue },
          { name: 'Yellow', areas: yellow },
          { name: 'Green', areas: green },
          { name: 'Gold', areas: gold },
          { name: 'Silver', areas: silver },
          { name: 'Crystal', areas: crystal },
          { name: 'Ruby', areas: ruby },
          { name: 'Sapphire', areas: sapphire },
          { name: 'Emerald', areas: emerald },
          { name: 'Diamond', areas: diamond },
          { name: 'Pearl', areas: pearl },
          { name: 'Platinum', areas: platinum },
          { name: 'Black', areas: black },
          { name: 'White', areas: white },
          { name: 'Black 2', areas: black2 },
          { name: 'White 2', areas: white2 },
          { name: 'X', areas: x },
          { name: 'Y', areas: y },
          { name: 'Soul silver', areas: soulSilver },
          { name: 'Heart gold', areas: heartGold },
          { name: 'Fire red', areas: fireRed },
          { name: 'Leaf green', areas: leafGreen },
        ];

        // debugger;

        setLocationAreaEncounters(allVersionData);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }, [selectedPokemon]);

  return (
    <>
      {locationAreaEncounters && (
        <StyledLocationArea className="location-area-container">
          <h3>Where to find</h3>
          {locationAreaEncounters.length === 0 && <p>None</p>}
          {locationAreaEncounters.length !== 0 && (
            <table className="location-area-table">
              <tr>
                <th>Version</th>
                <th>Area</th>
              </tr>
              {locationAreaEncounters.map((game) => (
                <tr key={game.name}>
                  <td className="game-version-logo">
                    {convertGameVersionToImage(game.name)}
                  </td>
                  <td>
                    {game.areas.length === 0 ? 'None' : ''}
                    {game.areas.map((area, index) => (
                      <p className="area" key={area}>
                        {index !== game.areas.length - 1 ? `${area}, ` : area}
                      </p>
                    ))}
                  </td>
                </tr>
              ))}
            </table>
          )}
        </StyledLocationArea>
      )}
    </>
  );
};

// Styled components
const StyledLocationArea = styled.div`
  width: 70%;

  @media (max-width: 1500px) {
    width: 90%;
  }

  h3 {
    margin: 2rem 0rem;
    color: white;
    text-transform: uppercase;
  }

  .location-area-table {
    margin: 2rem 0rem;
    width: 100%;
    color: white;
    background: rgba(256, 256, 256, 0.1);

    .game-version-logo {
      @media (max-width: 768px) {
        vertical-align: top;
      }
    }

    th {
      color: white;
      background: #88888878;
      padding: 1rem;
      padding: 1rem;
    }

    td {
      padding: 0.25rem;
      text-align: center;
      padding: 1rem;
    }

    .version-logo {
      width: 200px;

      @media (max-width: 500px) {
        width: 100px;
      }

      @media (max-width: 400px) {
        width: 75px;
      }
    }

    .area {
      margin: 0.5rem;
      display: inline-block;
      text-transform: capitalize;
    }
  }
`;

export default LocationArea;
