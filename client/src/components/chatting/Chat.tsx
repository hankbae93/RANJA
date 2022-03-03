import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import axios from '../../axios';
import useAuth from '../../hooks/useAuth';
import { ChatButton, ChatForm, ChatInput, ChatLog, ChatWrapper } from './Chat.elements';
import Message from './Message';

interface ChatMessageType {
  room: string;
  username: string;
  chat: string;
  createdAt: string;
}

const Chat = () => {
  const user = useAuth();
  const params = useParams();
  const { id } = params;
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const socket = useRef<any>(null);
  const txtRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (user && id) {
      socket.current = io('http://localhost:8000/chat', {
        path: '/socket.io',
      });

      socket.current.emit('join', { username: user?.username, room: id });
      socket.current.on('message', (data: ChatMessageType) => {
        setMessages((prev) => prev.concat(data));
      });
    }
  }, [user, id]);

  useEffect(() => {
    const getChatMessages = async () => {
      const { data } = await axios.get(`/chat/room/${id}`);
      setMessages(data.chats);
    };

    getChatMessages();
  }, [id]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        await axios.post(`/chat/room/${id}/chat`, { id, chat: txtRef.current.value, user: user?.username });
      } catch (err) {
        console.log(err);
      }
    },
    [user],
  );

  return (
    <ChatWrapper>
      <ChatLog>
        {messages.map((data) => {
          return <Message txt={data.chat} isMe={user?.username === data.username} />;
        })}
      </ChatLog>

      <ChatForm onSubmit={handleSubmit}>
        <ChatInput name="message" ref={txtRef} />
        <ChatButton type="submit">전송</ChatButton>
      </ChatForm>
    </ChatWrapper>
  );
};

export default Chat;
