import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { Outlet } from 'react-router-dom';
import axios from '../axios';
import { Chat, ChatList } from '../components';

const ChattingContainer = () => {
  const socket = useRef<any>(null);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    socket.current = io('http://localhost:8000/room', {
      path: '/socket.io',
      transports: ['websocket'],
    });

    socket.current.on('newRoom', (data: any) => {
      console.log(data);
      setRooms((prev) => prev.concat(data));
    });

    socket.current.on('removeRoom', (data: string) => {
      console.log(data);
    });

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

  return (
    <>
      <ChatList rooms={rooms} />
      <Outlet />
    </>
  );
};

export default ChattingContainer;
