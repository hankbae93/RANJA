import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DiscoverList } from '../components';

const DiscoverContainer = () => {
  const dispatch = useDispatch();

  return <DiscoverList />;
};

export default DiscoverContainer;
