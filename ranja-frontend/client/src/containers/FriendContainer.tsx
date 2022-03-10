import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Friend } from '../components';
import { UserInfoType } from '../types';

const FriendContainer = () => {
  const [list, setList] = useState<UserInfoType[]>([]);

  const getFriends = async () => {
    try {
      const { data } = await axios.get('/users/friends');
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  return <Friend list={list} />;
};

export default FriendContainer;
