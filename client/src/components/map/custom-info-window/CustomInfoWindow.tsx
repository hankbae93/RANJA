import React from 'react';
import { CursorFill, HouseFill, HeartFill, ChatFill, GearFill } from '@styled-icons/bootstrap';
import { UserInfoType } from '../../../types';
import {
  InfoWrapper,
  InfoContent,
  InfoThumbnail,
  InfoTitle,
  InfoButton,
  InfoButtons,
} from './CustomInfoWindow.elements';
import useNewRoom from '../../../hooks/useNewRoom';

const CustomInfoWindow = ({ data }: { data: UserInfoType }) => {
  const { chat } = useNewRoom();
  return (
    <InfoWrapper>
      <InfoThumbnail src={data.profileImg || 'http://placehold.it/320x100'} />
      <InfoContent>
        <InfoTitle>{data.username || 'NO NAME'}</InfoTitle>
        <InfoButtons>
          <InfoButton type="button" onClick={() => chat(data.username)}>
            <ChatFill />
            <span>채팅</span>
          </InfoButton>
        </InfoButtons>
      </InfoContent>
    </InfoWrapper>
  );
};

export default CustomInfoWindow;
