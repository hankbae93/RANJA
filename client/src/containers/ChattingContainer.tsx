import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { io } from 'socket.io-client';
import axios from '../axios';
import { ChatList } from '../components';
import useAuth from '../hooks/useAuth';
import { ChatRoomType } from '../types';

const ChattingContainer = () => {
  const [rooms, setRooms] = useState<ChatRoomType[]>([]);
  const socket = useRef<any>(null);
  const user = useAuth();
  useEffect(() => {
    const getRooms = async () => {
      try {
        const { data } = await axios.get('/room');
        setRooms(data);
      } catch (err) {
        console.log(err);
      }
    };
    getRooms();
  }, []);

  useEffect(() => {
    if (user) {
      socket.current = io('http://localhost:8000/room', {
        path: '/socket.io',
        query: {
          username: user.username,
        },
      });

      socket.current.on('newRoom', (data: ChatRoomType) => {
        console.log(data, '새방 생겻다');
        setRooms((prev) => prev.concat(data));
      });
    }
    return () => {
      socket.current?.disconnect();
    };
  }, [user]);

  return (
    <>
      <ChatList rooms={rooms} />
      <Outlet />
    </>
  );
};

export default ChattingContainer;
