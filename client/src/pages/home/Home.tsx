import React from 'react';
import { Contents } from '../../components';
import FriendContainer from '../../containers/FriendContainer';

const Home = () => {
  return (
    <Contents title="친구 목록">
      <FriendContainer />
    </Contents>
  );
};

export default Home;
