import React, { useEffect } from 'react';
// React Router
import { Route, Switch } from 'react-router-dom';
// Styled components
import styled from 'styled-components';
// Redux
import { useDispatch } from 'react-redux';
import { loadGen1Data } from './redux/pokemonReducer';
import { loadAllTypeData } from './redux/typeReducer';
// Components
import GlobalStyle from './components/GlobalStyle';
import Home from './Pages/Home';
import Nav from './components/Nav';
import Pokemon from './Pages/Pokemon';

const App = () => {
  // Redux
  const dispatch = useDispatch();

  // Get all data for gen1
  useEffect(() => {
    dispatch(loadGen1Data());
    dispatch(loadAllTypeData());
  }, []);

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
