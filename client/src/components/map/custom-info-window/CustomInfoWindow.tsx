import React from 'react';
import { InfoWindow } from '@react-google-maps/api';
import { ChatFill } from '@styled-icons/bootstrap';
import { UserInfoType } from '../../../types';
import useNewRoom from '../../../hooks/useNewRoom';

import {
  InfoWrapper,
  InfoContent,
  InfoThumbnail,
  InfoTitle,
  InfoButton,
  InfoButtons,
} from './CustomInfoWindow.elements';

interface InfoWindowProps {
  data: UserInfoType;
  position: {
    lat: number;
    lng: number;
  };
  onCloseClick: () => void;
}

const CustomInfoWindow = ({ data, position, onCloseClick }: InfoWindowProps) => {
  const { chat } = useNewRoom();

  const checkData = (username: string) => {
    return true;
  };

  return (
    <InfoWindow position={position} onCloseClick={onCloseClick}>
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
    </InfoWindow>
  );
};

export default CustomInfoWindow;
