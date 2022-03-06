import React from 'react';
import { UserInfoType } from '../../types';
import { Card as Wrapper, CardBtns, CardButton, CardImg, CardInfo, CardIntroduce, CardName } from './Card.elements';
import useCard from './useCard';

interface CardProps {
  item: UserInfoType;
  type: 'USER' | 'REQUEST';
}

const Card: React.FC<CardProps> = ({ item, type }) => {
  const { addFriends, moveUserChat, moveUserHouse } = useCard(item);

  const renderButton = (): React.ReactNode | false => {
    if (type === 'USER') {
      return (
        <>
          <CardButton onClick={addFriends}>친구 추가</CardButton>
          <CardButton onClick={moveUserChat}>채팅</CardButton>
          <CardButton onClick={moveUserHouse}>HOME</CardButton>
        </>
      );
    }

    if (type === 'REQUEST') {
      return (
        <>
          <CardButton onClick={addFriends}>친구 추가</CardButton>
          <CardButton onClick={moveUserChat}>채팅</CardButton>
          <CardButton onClick={moveUserHouse}>HOME</CardButton>
        </>
      );
    }

    return false;
  };

  return (
    <Wrapper key={item.username}>
      <CardImg alt="" src={item.profileImg || 'http://placehold.it/320x100'} />

      <CardInfo>
        <CardName>{item.username}</CardName>
        <CardIntroduce>{item.desc ?? `안녕하세요 ${item.username}입니다.`}</CardIntroduce>
        <CardBtns>{renderButton()}</CardBtns>
      </CardInfo>
    </Wrapper>
  );
};

export default Card;
