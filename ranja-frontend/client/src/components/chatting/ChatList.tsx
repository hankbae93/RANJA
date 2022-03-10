import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatRoomType } from '../../types';
import { ChatRoomIcon, ChatRoomThumbnail } from './Chat.elements';

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
