import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UserMenu from '../pages/chatPage/chatHeader/UserMenu';

const mockProps = {
  disabled: false,
  activeUser: {
    firstName: 'Alex',
    lastName: 'Brown',
    username: 'qwerty',
  },
  onClickEditUserInfo: jest.fn(),
  onClickLogout: jest.fn(),
};

describe('<UserMenu />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserMenu {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
