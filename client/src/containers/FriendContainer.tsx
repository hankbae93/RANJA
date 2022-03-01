import React from 'react';
import { FriendList } from '../components';
import useReduxMap from '../hooks/useReduxMap';

const FriendContainer = () => {
  const { friends } = useReduxMap();

  return <FriendList list={friends} />;
};

export default FriendContainer;
