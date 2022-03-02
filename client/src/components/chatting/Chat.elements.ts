import styled from 'styled-components';

export const ChatWrapper = styled.div`
  background-color: #effffd;
`;

export const ChatLog = styled.ul`
  padding: 10px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  height: 500px;
  overflow-y: scroll;
`;

export const ChatMessage = styled.li<{ isMe: boolean }>`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px 15px;
  align-self: ${({ isMe }) => (!isMe ? 'end' : 'baseline')};
`;

export const ChatForm = styled.form`
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 30px;
`;

export const ChatInput = styled.input`
  flex: 1;
  height: 100%;
  /* border: none; */
`;

export const ChatButton = styled.button`
  padding: 5px 10px;
  height: 100%;
`;

export const ChatRoomIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const ChatRoomThumbnail = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  object-position: center top;
`;
