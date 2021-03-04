import React, { useState, useEffect } from 'react';
// Styled components
import styled from 'styled-components';
// Axios
import axios from 'axios';

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

        setLocationAreaEncounters(response.data);
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
          <table className="location-area-table">
            <tr>
              <th className="header">Area</th>
              <th className="header">Version</th>
            </tr>
            {locationAreaEncounters.map((area) => (
              <tr className="area" key={area.location_area.name}>
                <td className="area-name">{area.location_area.name}</td>
                <td className="version">
                  {area.version_details.map((version, index) => (
                    <span className="version">
                      {index !== area.version_details.length - 1
                        ? `${version.version.name}, `
                        : version.version.name}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </table>
        </StyledLocationArea>
      )}
    </>
  );
};

// Styled components
const StyledLocationArea = styled.div`
  width: 70%;

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
  }
`;

export default LocationArea;
