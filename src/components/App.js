import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import ChatPage from '../pages/ChatPage';
import WelcomePage from '../redux/containers/WelcomePage';
import configureStore from '../redux/store';
import  PrivateRoute  from '../redux/containers/PrivateRoute'
import history from '../utils/history';

const store = configureStore();

const App = ({ classes }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/(welcome)?' component={WelcomePage} />
        <PrivateRoute path='/chat' component={ChatPage} />
        <Redirect to='/' />
      </Switch>
    </Router>
  </Provider>
);

export default App;
