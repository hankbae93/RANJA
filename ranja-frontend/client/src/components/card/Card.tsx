import React from 'react';
import { PersonPlus, PersonCheckFill, PersonXFill, HouseFill, ChatFill } from '@styled-icons/bootstrap';
import useAuth from '../../hooks/useAuth';
import { UserInfoType } from '../../types';
import { Card as Wrapper, CardBtns, CardButton, CardImg, CardInfo, CardIntroduce, CardName } from './Card.elements';
import useCard from './useCard';

export interface CardDataType extends UserInfoType {
  isAccept?: boolean | undefined;
  id?: string;
}

interface CardProps {
  item: CardDataType;
  type: 'USER' | 'REQUEST' | 'FRIEND';
}

const Card: React.FC<CardProps> = ({ item, type }) => {
  const { addFriends, moveUserChat, moveUserHouse, acceptFriends } = useCard(item);
  const user = useAuth();

  const renderButton = (): React.ReactNode | false => {
    if (!user) {
      return (
        <CardBtns>
          <CardButton onClick={moveUserHouse}>
            <HouseFill width={20} />
            <span>HOME</span>
          </CardButton>
        </CardBtns>
      );
    }
    if (type === 'USER') {
      return (
        <CardBtns>
          {!item.isFriend && (
            <CardButton onClick={addFriends}>
              <PersonPlus width={20} />
              <span>친구 추가</span>
            </CardButton>
          )}
          {item.isFriend && (
            <CardButton onClick={moveUserChat}>
              <ChatFill width={20} />
              <span>채팅</span>
            </CardButton>
          )}
          <CardButton onClick={moveUserHouse}>
            <HouseFill width={20} />
            <span>HOME</span>
          </CardButton>
        </CardBtns>
      );
    }

    if (type === 'FRIEND') {
      return (
        <CardBtns>
          <CardButton onClick={moveUserChat}>
            <ChatFill width={20} />
            <span>채팅</span>
          </CardButton>
          <CardButton onClick={moveUserHouse}>
            <HouseFill width={20} />
            <span>HOME</span>
          </CardButton>
        </CardBtns>
      );
    }

    if (type === 'REQUEST') {
      return (
        <CardBtns>
          {item.isAccept === undefined && item.id ? (
            <>
              <CardButton onClick={() => acceptFriends(item.id ?? '', true)}>
                <PersonCheckFill width={20} />
                <span>수락</span>
              </CardButton>
              <CardButton onClick={() => acceptFriends(item.id ?? '', false)}>
                <PersonXFill width={20} />
                <span>거절</span>
              </CardButton>
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
