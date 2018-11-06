import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MessageInput from '../pages/chatPage/chat/MessageInput';

const mockProps = {
  disabled: false,
  showJoinButton: false,

  onClickJoin: jest.fn(),
  sendMessage: jest.fn(),
};

describe('<MessageInput />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MessageInput {...mockProps} />, div);
  });

  it('renders input', () => {
    const tree = renderer.create(<MessageInput {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders disabled input', () => {
    const props = {
      ...mockProps,
      disabled: true,
    };

    const tree = renderer.create(<MessageInput {...props}  />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders button', () => {
    const props = {
      ...mockProps,
      showJoinButton: true,
    };

    const tree = renderer.create(<MessageInput {...mockProps}  />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders disabled button', () => {
    const props = {
      ...mockProps,
      disabled: true,
      showJoinButton: true,
    };

    const tree = renderer.create(<MessageInput {...mockProps} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
