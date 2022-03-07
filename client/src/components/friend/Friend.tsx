import React from 'react';
import { UserInfoType } from '../../types';
import Card from '../card/Card';
import { CardList } from '../card/Card.elements';

interface FriendProps {
  list: UserInfoType[];
}

const Friend = ({ list }: FriendProps) => {
  return (
    <CardList>
      {list.map((item, i) => {
        return <Card key={item.username} item={item} type="FRIEND" />;
      })}
    </CardList>
  );
};

export default Friend;
