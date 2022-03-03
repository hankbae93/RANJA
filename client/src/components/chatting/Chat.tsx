import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import axios from '../../axios';
import useAuth from '../../hooks/useAuth';
import { ChatButton, ChatForm, ChatInput, ChatLog, ChatWrapper } from './Chat.elements';
import Message from './Message';

interface ChatMessageType {
  room?: any;
  user?: string;
  username?: string;
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
    if (user && id) {
      socket.current = io('http://localhost:8000/chat', {
        path: '/socket.io',
        // transports: ['websocket'],
      });

      socket.current.emit('join', { username: user?.username, room: id });
      socket.current.on('message', (data: { chat: string; username: string }) => {
        setMessages((prev) => prev.concat({ chat: data.chat, user: data.username }));
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
        socket.current.emit('sendMessage', { chat: txtRef.current.value, user: user?.username });
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
          console.log(data);
          return <Message txt={data.chat} isMe={user?.username === data.user} />;
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
