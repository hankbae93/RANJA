import React from 'react';
import { ChatMessage } from './Chat.elements';

const Message = ({ txt, isMe }: { txt: string; isMe: boolean }) => {
  return <ChatMessage isMe={isMe}>{txt}</ChatMessage>;
};

export default Message;
