import React from 'react';
import ChatHeader from './ChatHeader';
import Sidebar from '../pages/chatPage/Sidebar';
import Chat from '../pages/chatPage/Chat';
import { chatList, messages } from '../mock-data';

const ChatPage = () => (
  <>
    <ChatHeader />
    <Sidebar chatList={chatList} />
    <Chat messages={messages} />
  </>
);

export default ChatPage;
