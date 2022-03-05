import React from 'react';
import axios from '../axios';

import { DiscoverList } from '../components';

const DiscoverContainer = () => {
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
