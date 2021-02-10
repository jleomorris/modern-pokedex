import React from 'react';
// React Router
import { Route, Switch } from 'react-router-dom';
// Styled components
import styled from 'styled-components';
// Components
import GlobalStyle from './components/GlobalStyle';
import Home from './components/Home';
import Nav from './components/Nav';
import ReduxDemo from './components/ReduxDemo';
// Images
import demo from './demo.jpg';

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Nav />
      <img src={demo} alt="background" />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/redux-demo" exact>
          <ReduxDemo />
        </Route>
      </Switch>
    </StyledApp>
  );
};

// Styled components
const StyledApp = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(0.8);
    z-index: -1;
    min-height: 90vh;
    object-fit: cover;
  }
`;

export default App;
