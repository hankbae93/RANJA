import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import axios from '../../axios';
import useAuth from '../../hooks/useAuth';
import { ChatButton, ChatForm, ChatInput, ChatLog, ChatWrapper } from './Chat.elements';
import Message from './Message';

interface ChatMessageType {
  room?: any;
  user?: string;
  chat: string;
}

const Chat = () => {
  const user = useAuth();
  const params = useParams();
  const { id } = params;
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const socket = useRef<any>(null);
  const txtRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    socket.current = io('http://localhost:8000/chat', {
      path: '/socket.io',
      // transports: ['websocket'],
    });

    socket.current.on('chat', (data: string) => {
      console.log(data);
    });
  }, []);

  useEffect(() => {
    const getChatMessages = async () => {
      const { data } = await axios.get(`/chat/room/${id}`);
      setMessages(data.chats);
    };

    getChatMessages();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post(`/chat/room/${id}/chat`, { room: id, chat: txtRef.current.value, user: user?.username });
      setMessages((prev) => prev.concat({ room: null, chat: txtRef.current.value, user: user?.username }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ChatWrapper>
      <ChatLog>
        {messages.map((message) => (
          <Message txt={message.chat} isMe={false} />
        ))}
      </ChatLog>

      <ChatForm onSubmit={handleSubmit}>
        <ChatInput name="message" ref={txtRef} />
        <ChatButton type="submit">전송</ChatButton>
      </ChatForm>
    </ChatWrapper>
  );
};

export default Chat;
