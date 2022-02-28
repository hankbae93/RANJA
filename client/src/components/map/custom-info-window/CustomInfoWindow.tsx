import React from 'react';
import { UserInfoType } from '../../../types';
import { InfoWrapper, InfoHead, InfoThumbnail, InfoTitle } from './CustomInfoWindow.elements';

const CustomInfoWindow = ({ data }: { data: UserInfoType }) => {
  return (
    <InfoWrapper>
      <InfoHead>
        <InfoThumbnail src={data.profileImg || 'http://placehold.it/320x100'} />
      </InfoHead>
      <InfoTitle>{data.username || 'NO NAME'}</InfoTitle>
    </InfoWrapper>
  );
};

export default CustomInfoWindow;
