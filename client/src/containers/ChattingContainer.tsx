import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from '../axios';
import { ChatList } from '../components';

const ChattingContainer = () => {
  const [rooms, setRooms] = useState([]);
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

  return (
    <>
      <ChatList rooms={rooms} />
      <Outlet />
    </>
  );
};

export default ChattingContainer;
