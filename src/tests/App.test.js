import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

jest.mock('../redux/containers/PrivateRoute', () => () => 'PrivateRoute');
jest.mock('../redux/containers/WelcomePage', () => () => 'WelcomePage');
jest.mock('../redux/containers/ChatPage', () => () => 'ChatPage');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
