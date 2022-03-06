import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, UserInfoType } from '../types';
import { Discover } from '../components';

const DiscoverContainer = () => {
  const aroundUsers = useSelector<RootState, UserInfoType[]>((state) => state.map.aroundUsers);

  return <Discover list={aroundUsers} />;
};

export default DiscoverContainer;
