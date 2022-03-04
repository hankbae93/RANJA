import React from 'react';
import { CursorFill, HouseFill, HeartFill, ChatFill, GearFill } from '@styled-icons/bootstrap';
import { UserInfoType } from '../../../types';
import useNewRoom from '../../../hooks/useNewRoom';
import useReduxMap from '../../../hooks/useReduxMap';

import {
  InfoWrapper,
  InfoContent,
  InfoThumbnail,
  InfoTitle,
  InfoButton,
  InfoButtons,
} from './CustomInfoWindow.elements';

const CustomInfoWindow = ({ data }: { data: UserInfoType }) => {
  const { chat } = useNewRoom();
  const { friends } = useReduxMap();

  const checkData = (username: string) => {
    if (friends) {
      return friends.some((el) => el.username === username);
    }
    return true;
  };

  return (
    <InfoWrapper>
      <InfoThumbnail src={data.profileImg || 'http://placehold.it/320x100'} />
      <InfoContent>
        <InfoTitle>{data.username || 'NO NAME'}</InfoTitle>
        <InfoButtons>
          {checkData(data.username) && (
            <InfoButton type="button" onClick={() => chat(data.username)}>
              <ChatFill />
              <span>채팅</span>
            </InfoButton>
          )}
        </InfoButtons>
      </InfoContent>
    </InfoWrapper>
  );
};

export default CustomInfoWindow;
