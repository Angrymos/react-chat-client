import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ChatHeader from './ChatHeader';
import Sidebar from './chatPage/sideBar/Sidebar';
import Chat from './chatPage/chat/Chat';
import { chatList, messages } from '../mock-data';

const ChatPage = () => (
  <>
    <ChatHeader />
    <Sidebar chatList={chatList} />
    <Chat messages={messages} />
  </>
);

export default ChatPage;
