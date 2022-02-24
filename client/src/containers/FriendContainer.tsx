import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from '../axios';
import { FriendList } from '../components';
import useAuth from '../hooks/useAuth';
import { UserInfoType } from '../types';
import { update } from '../redux/modules/map';

const FriendContainer = () => {
  const [list, setList] = useState<UserInfoType[]>([]);
  const user = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const getFriends = async () => {
        const { data } = await axios.get('/users/friends');
        console.log(data);
        setList(data);
        dispatch(update(data));
      };
      getFriends();
    }
  }, [user]);

  return <FriendList list={list} />;
};

export default FriendContainer;
