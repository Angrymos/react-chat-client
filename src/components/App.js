import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ChatPage from './ChatPage';
import WelcomePage from '../redux/containers/WelcomePage';
import configureStore from '../redux/store';

const store = configureStore();

const App = ({ classes }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/(welcome)?' component={WelcomePage} />
        <Route path='/chat' component={ChatPage} />
        <Redirect to='/' />
      </Switch>
    </Router>
  </Provider>
);

export default App;
