import React from 'react';
import { Container, HomeHead, HomeHeadCounts, HomeHeading } from './Home.elements';
import { FriendList } from '../../components';
import { FriendInfoType } from '../../types';

const Home = () => {
  const dummy: FriendInfoType[] = [
    {
      address: '서울시 제주동 감읍길 126-20, 뒷동산',
      username: '김장춘',
      hasFriend: 6,
      isFriend: false,
      homeLink: '/user/2',
      image: 'assets/',
      introduce: '장춘일세다.',
    },
    {
      address: '서울시 제주동 감읍길 126-20, 뒷동산',
      username: '김장춘',
      hasFriend: 6,
      isFriend: false,
      homeLink: '/user/2',
      image: 'assets/',
      introduce: '장춘일세다.',
    },
    {
      address: '서울시 제주동 감읍길 126-20, 뒷동산',
      username: '김장춘',
      hasFriend: 6,
      isFriend: false,
      homeLink: '/user/2',
      image: 'assets/',
      introduce: '장춘일세다.',
    },
    {
      address: '서울시 제주동 감읍길 126-20, 뒷동산',
      username: '김장춘',
      hasFriend: 6,
      isFriend: false,
      homeLink: '/user/2',
      image: 'assets/',
      introduce: '장춘일세다.',
    },
  ];
  return (
    <Container>
      <HomeHead>
        <HomeHeading>My Friends</HomeHeading>
        <HomeHeadCounts>17 recent found</HomeHeadCounts>
      </HomeHead>

      <FriendList list={dummy} />
    </Container>
  );
};

export default Home;
