import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ChatPage from './ChatPage/ChatPage';
import WelcomePage from './WelcomePage/WelcomePage';

const App = ({ classes }) => (
  <Router>
    <Switch>
      <Route  exact path='/(welcome)?' component={WelcomePage} />
      <Route  path='/chat' component={ChatPage} />
      <Redirect to='/'/>
    </Switch>
  </Router>
);

export default App;
