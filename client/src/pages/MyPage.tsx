import React from 'react';
import { Contents } from '../components';
import MyPageContainer from '../containers/MyPageContainer';

const MyPage = () => {
  return (
    <Contents title="My Page">
      <MyPageContainer />
    </Contents>
  );
};

export default MyPage;
