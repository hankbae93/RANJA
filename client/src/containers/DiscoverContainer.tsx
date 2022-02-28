import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from '../axios';

import { DiscoverList } from '../components';

const DiscoverContainer = () => {
  const dispatch = useDispatch();

  const addFriends = async (name: string) => {
    try {
      await axios.post(`/friendRequest/${name}`);
      alert('친구 요청이 성공하셧습니다.');
    } catch (err) {
      console.log(err);
    }
  };

  return <DiscoverList addFriends={addFriends} />;
};

export default DiscoverContainer;
