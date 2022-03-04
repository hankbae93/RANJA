import React from 'react';
import { CursorFill, HouseFill, HeartFill, ChatFill, GearFill } from '@styled-icons/bootstrap';
import { UserInfoType } from '../../../types';
import { InfoWrapper, InfoHead, InfoThumbnail, InfoTitle } from './CustomInfoWindow.elements';
import useNewRoom from '../../../hooks/useNewRoom';

const CustomInfoWindow = ({ data }: { data: UserInfoType }) => {
  const { chat } = useNewRoom();
  return (
    <InfoWrapper>
      <InfoHead>
        <InfoThumbnail src={data.profileImg || 'http://placehold.it/320x100'} />
      </InfoHead>
      <InfoTitle>{data.username || 'NO NAME'}</InfoTitle>
      <button type="button" onClick={() => chat(data.username)}>
        <ChatFill />
        채팅
      </button>
      <div>
        <HouseFill />
      </div>
    </InfoWrapper>
  );
};

export default CustomInfoWindow;
