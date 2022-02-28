import React, { useState, useEffect } from 'react';
import axios from '../axios';
import FriendRequestList from '../components/friend-request-list/FriendRequestList';
import { FriendRequestType } from '../types';

const MyPageContainer = () => {
  const [friendRequests, setFriendRequests] = useState<FriendRequestType[]>([]);

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

  const acceptFriends = async (id: string, isAccept: boolean): Promise<void> => {
    try {
      await axios.post(`/friendRequest/accept/${id}`, { isAccept });
    } catch (err) {
      console.log(err);
    }
  };

  return <FriendRequestList friendRequests={friendRequests} acceptFriends={acceptFriends} />;
};

export default MyPageContainer;
