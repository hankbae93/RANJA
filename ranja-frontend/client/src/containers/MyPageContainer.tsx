import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardDataType } from '../components/card/Card';
import FriendRequestList from '../components/friend-request/FriendRequestList';

const MyPageContainer = () => {
  const [friendRequests, setFriendRequests] = useState<CardDataType[]>([]);

  const getFriendRequests = async (): Promise<void> => {
    try {
      const { data } = await axios.get('/friendRequest');
      setFriendRequests(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFriendRequests();
  }, []);

  return <FriendRequestList list={friendRequests} />;
};

export default MyPageContainer;
