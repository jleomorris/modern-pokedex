import React from 'react';
// Rechart
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
// Styled components
import styled from 'styled-components';

// export default function Recharts() {
const StatChart = ({ selectedPokemon }) => {
  const data = [
    { stat: 'HP', base: selectedPokemon[0].stats[0].base_stat },
    { stat: 'Attack', base: selectedPokemon[0].stats[1].base_stat },
    { stat: 'Def', base: selectedPokemon[0].stats[2].base_stat },
    { stat: 'Sp Attack', base: selectedPokemon[0].stats[3].base_stat },
    { stat: 'Sp Def', base: selectedPokemon[0].stats[4].base_stat },
    { stat: 'Speed', base: selectedPokemon[0].stats[5].base_stat },
  ];

  return (
    <StyledStatChart className="stat-chart">
      <h3>Base stats</h3>
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="stat" stroke="#ffffff" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="base"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
      {/* <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 15, right: 0, bottom: 15, left: 0 }}
        >
          <Tooltip />
          <XAxis dataKey="stat" />
          <YAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Legend />
          <Line type="monotone" dataKey="base" stroke="#FB8833" />
          <Line type="monotone" dataKey="leads" stroke="#17A8F5" />
        </LineChart>
      </ResponsiveContainer> */}
    </StyledStatChart>
  );
};

// Styled components
const StyledStatChart = styled.div`
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }

  h3 {
    color: white;
    width: 100%;
    text-transform: uppercase;
  }
`;

export default StatChart;
