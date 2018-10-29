import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import WelcomePage from '../redux/containers/WelcomePage';
import ChatPage from '../redux/containers/ChatPage';
import configureStore from '../redux/store';
import  PrivateRoute  from '../redux/containers/PrivateRoute'
import history from '../utils/history';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/(welcome)?' component={WelcomePage} />
        <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
        <Redirect to='/' />
      </Switch>
    </Router>
  </Provider>
);

export default App;
