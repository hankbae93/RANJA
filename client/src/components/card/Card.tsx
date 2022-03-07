import React from 'react';
import { UserInfoType } from '../../types';
import { Card as Wrapper, CardBtns, CardButton, CardImg, CardInfo, CardIntroduce, CardName } from './Card.elements';
import useCard from './useCard';

export interface CardDataType extends UserInfoType {
  isAccept?: boolean | undefined;
  id?: string;
}

interface CardProps {
  item: CardDataType;
  type: 'USER' | 'REQUEST';
  isFriend: boolean;
}

const Card: React.FC<CardProps> = ({ item, type, isFriend }) => {
  const { addFriends, moveUserChat, moveUserHouse, acceptFriends } = useCard(item);

  const renderButton = (): React.ReactNode | false => {
    if (type === 'USER') {
      return (
        <CardBtns>
          {item.isFriend && <CardButton onClick={addFriends}>친구 추가</CardButton>}
          <CardButton onClick={moveUserChat}>채팅</CardButton>
          <CardButton onClick={moveUserHouse}>HOME</CardButton>
        </CardBtns>
      );
    }

    if (type === 'REQUEST') {
      return (
        <CardBtns>
          {item.isAccept === undefined && item.id ? (
            <>
              <CardButton onClick={() => acceptFriends(item.id ?? '', true)}>수락</CardButton>
              <CardButton onClick={() => acceptFriends(item.id ?? '', false)}>거절</CardButton>
            </>
          ) : (
            <p>{item.isAccept ? '수락하셧습니다.' : '거절하셨습니다.'}</p>
          )}
        </CardBtns>
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
        {renderButton()}
      </CardInfo>
    </Wrapper>
  );
};

export default Card;
