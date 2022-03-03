import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import axios from '../../axios';
import useAuth from '../../hooks/useAuth';
import { UserInfoType } from '../../types';
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
  const [partner, setPartner] = useState<UserInfoType | null>(null);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const socket = useRef<any>(null);
  const txtRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const chatRef = useRef() as React.MutableRefObject<HTMLUListElement>;

  useEffect(() => {
    if (user && id) {
      socket.current = io('http://localhost:8000/chat', {
        path: '/socket.io',
      });

      socket.current.emit('join', { username: user?.username, room: id });
      socket.current.on('message', (data: ChatMessageType) => {
        console.log(data, '도착');
        setMessages((prev) => prev.concat(data));
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      });
    }
  }, [user, id]);

  useEffect(() => {
    const getChatMessages = async () => {
      const { data } = await axios.get(`/chat/room/${id}`);
      console.log(data, '/chat/room/id message');
      setPartner(data.partner);
      setMessages(data.chats);
    };

    getChatMessages();
  }, [id]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const data = {
          roomId: id,
          chat: txtRef.current.value,
        };
        await axios.post(`/chat/message`, data);
        txtRef.current.value = '';
        txtRef.current.focus();
      } catch (err) {
        console.log(err);
      }
    },
    [user],
  );

  return (
    <ChatWrapper>
      <ChatLog ref={chatRef}>
        {messages.map((data) => {
          return (
            <Message
              key={data.createdAt}
              txt={data.chat}
              isMe={user?.username === data.username}
              partner={partner}
              createdAt={data.createdAt}
            />
          );
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
