import React from 'react';
// React Router
import { Route, Switch } from 'react-router-dom';
// Styled components
import styled from 'styled-components';
// Components
import GlobalStyle from './components/GlobalStyle';
import Home from './components/Home';
import Nav from './components/Nav';
import Pokemon from './components/Pokemon';

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path={['/pokemon/:id', '/pokemon']}>
          <Pokemon />
        </Route>
      </Switch>
    </StyledApp>
  );
};

// Styled components
const StyledApp = styled.div`
  position: relative;
`;

export default App;
