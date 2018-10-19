import React from 'react';
import ChatHeader from './chatPage/ChatHeader';
import Sidebar from './chatPage/Sidebar';
import Chat from './chatPage/Chat';
import { chatList, messages } from '../mock-data';

const ChatPage = () => (
  <>
    <ChatHeader />
    <Sidebar chatList={chatList} />
    <Chat messages={messages} />
  </>
);

export default ChatPage;
