/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { UserInfoType } from '../../types';
import { ChatButton, ChatForm, ChatInput, ChatLog, ChatWrapper } from './Chat.elements';
import Message from './Message';
import LoadingProgressBar from '../common/loading-progress-bar/LoadingProgressBar';

interface ChatMessageType {
  room: string;
  username: string;
  chat: string;
  createdAt: string;
  _id: string;
}

const SOCKET_URL =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PRODUCTION_API_SERVER : 'http://localhost:8000';
const Chat = () => {
  const user = useAuth();
  const params = useParams();
  const { id } = params;
  const [partner, setPartner] = useState<UserInfoType | null>(null);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const socket = useRef<any>(null);
  const txtRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const chatRef = useRef() as React.MutableRefObject<HTMLUListElement>;
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user && id) {
      socket.current = io(`${SOCKET_URL}/chat`, {
        path: '/socket.io',
        query: {
          roomId: id,
        },
      });

      socket.current.on('message', (data: ChatMessageType) => {
        setMessages((prev) => prev.concat(data));
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      });
    }
    return () => {
      socket.current?.disconnect();
    };
  }, [user, id]);

  useEffect(() => {
    const getChatMessages = async () => {
      const { data } = await axios.get(`/chat/room/${id}`);
      setPartner(data.partner);
      setMessages(data.chats);
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    };

    getChatMessages();
  }, [id]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      try {
        const data = {
          roomId: id,
          chat: txtRef.current.value,
        };
        await axios.post(`/chat/message`, data);
        setLoading(false);
        txtRef.current.value = '';
        txtRef.current.focus();
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    },
    [user, id],
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
        <ChatButton type="submit">{loading ? <LoadingProgressBar /> : '전송'}</ChatButton>
      </ChatForm>
    </ChatWrapper>
  );
};

export default Chat;
