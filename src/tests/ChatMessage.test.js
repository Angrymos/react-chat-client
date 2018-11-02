import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatMessage from '../pages/chatPage/chat/ChatMessage';
import Avatar from '../components/Avatar';

const mockProps = {
  message: {
    chatId: '5bd82f4bac450f23acdd78ad',
    content: 'Hello',
    sender: {
      id: '5bd6dda2578d3404b06c58fb',
      username: '123',
      lastName: '',
      firstName: '',
    },
    statusMessage: false,
    createdAt: '2018-03-16T10:53:23.200Z',
  },

  activeUserId: '5bd6dda2578d3404b06c58fb',
};

jest.mock('moment', () => () => ({ fromNow: () => '2 days ago' }));

describe('<Avatar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMessage {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders name of other users correctly', () => {
    const tree = renderer
      .create(<ChatMessage
        {...mockProps}
        sender={{
          _id: '43egfd24',
          username: 'someone',
          firstName: '',
          lastName: '',
        }}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders status message', () => {
    const message = {
      ...mockProps.message,
      content: ' joined',
      statusMessage: true,
    };
    
    const props = {
      ...mockProps,
      message: message,
    };

    const tree = renderer.create(<ChatMessage {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});



