import React from 'react';
import Card, { CardDataType } from '../card/Card';
import { CardList } from '../card/Card.elements';

const FriendRequestList = ({ list }: { list: CardDataType[] }) => {
  return (
    <CardList>
      {list.map((item, i) => {
        return <Card key={item.username} item={item} type="REQUEST" isFriend={false} />;
      })}
    </CardList>
  );
};

export default FriendRequestList;
