import React from 'react';
import { ChatButton, ChatForm, ChatInput, ChatLog, ChatWrapper } from './Chat.elements';
import Message from './Message';

const Chat = () => {
  return (
    <ChatWrapper>
      <ChatLog>
        {['asdkajsd', 'asdacccc'].map((message) => (
          <Message txt={message} isMe={false} />
        ))}
      </ChatLog>

      <ChatForm>
        <ChatInput />
        <ChatButton type="submit">전송</ChatButton>
      </ChatForm>
    </ChatWrapper>
  );
};

export default Chat;
