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

export const ChatForm = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 15px;
  margin-bottom: 15px;
  height: 30px;
`;

export const ChatInput = styled.input`
  flex: 1;
  height: 100%;
  /* border: none; */
  padding: 0 15px;
  border-radius: 10px;
  background-color: transparent;
`;

export const ChatButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 100px;
  height: 100%;
  border: none;
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

// Message Element
export const ChatMessage = styled.div<{ isMe: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  align-self: ${({ isMe }) => (!isMe ? 'end' : 'baseline')};
`;

export const ChatPartnerHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
`;

export const ChatPartnerProfile = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  object-position: center top;
`;

export const ChatText = styled.p`
  padding: 5px 15px;
  border: 1px solid #ccc;
  border-radius: 10px;

  span {
    margin-left: 10px;
    font-size: 12px;
    color: #ccc;
  }
`;
