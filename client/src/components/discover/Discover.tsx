import React from 'react';
import useAuth from '../../hooks/useAuth';
import { UserInfoType } from '../../types';
import Card from '../card/Card';
import { CardList } from '../card/Card.elements';

const Discover = ({ list }: { list: UserInfoType[] }) => {
  const user = useAuth();
  return (
    <CardList>
      {list.map((item, i) => {
        if (item.username === user?.username) return false;
        return <Card key={item.username} item={item} type="USER" isFriend={false} />;
      })}
    </CardList>
  );
};

export default Discover;
