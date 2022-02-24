import React from 'react';
import { MarkerType } from '../../../types';
import { InfoWrapper, InfoHead, InfoThumbnail, InfoTitle } from './CustomInfoWindow.elements';

const CustomInfoWindow = ({ data }: { data: MarkerType }) => {
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
