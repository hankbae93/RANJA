import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { ChatRoomIcon, ChatRoomThumbnail } from './Chat.elements';

interface ChatRoomType {
  createdAt: string;
  max: number;
  owner: string[];
  password: string;
  _id: string;
  title: string;
  partner: {
    profileImg: string;
  };
  // _v: number;
}

const ChatList = ({ rooms }: { rooms: ChatRoomType[] }) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      {rooms.map((room) => {
        const { _id: id } = room;
        return (
          <ChatRoomIcon key={id} onClick={() => navigate(`/chat/${id}`)}>
            <ChatRoomThumbnail src={room.partner.profileImg} /> <p>{room.title}</p>
          </ChatRoomIcon>
        );
      })}
    </div>
  );
};

export default ChatList;
