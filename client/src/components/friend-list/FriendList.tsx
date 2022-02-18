import React from 'react';
import { FriendInfoType } from '../../types';
import {
  List,
  ListItem,
  ListItemAddress,
  ListItemBtns,
  ListItemButton,
  ListItemImg,
  ListItemInfo,
  ListItemIntroduce,
  ListItemName,
} from './FriendList.elements';

const FriendList = ({ list }: { list: FriendInfoType[] }) => {
  return (
    <List>
      {list.map((item, i) => {
        return (
          <ListItem>
            <ListItemImg alt="" src="http://placehold.it/320x100" />

            <ListItemInfo>
              <ListItemAddress>{item.address}</ListItemAddress>
              <ListItemName>{item.username}</ListItemName>
              <ListItemIntroduce>{item.introduce}</ListItemIntroduce>
              <ListItemBtns>
                <ListItemButton>친구추가</ListItemButton>
                <ListItemButton>채팅</ListItemButton>
                <ListItemButton>친구네 집</ListItemButton>
              </ListItemBtns>
            </ListItemInfo>
          </ListItem>
        );
      })}
    </List>
  );
};

export default FriendList;
