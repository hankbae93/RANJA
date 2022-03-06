import React from 'react';
import { UserInfoType } from '../../types';
import Card from '../card/Card';
import { CardList } from '../card/Card.elements';

const Discover = ({ list }: { list: UserInfoType[] }) => {
  return (
    <CardList>
      {list.map((item, i) => {
        return <Card key={item.username} item={item} type="USER" />;
      })}
    </CardList>
  );
};

export default Discover;
