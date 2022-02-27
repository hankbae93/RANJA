import React from 'react';
import { UserInfoType } from '../../types';
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

const FriendList = ({ list }: { list: UserInfoType[] }) => {
  return (
    <List>
      {list.map((item, i) => {
        return (
          <ListItem>
            <ListItemImg alt="" src={item.profileImg || 'http://placehold.it/320x100'} />

            <ListItemInfo>
              {/* <ListItemAddress>{item.location.join(' / ')}</ListItemAddress> */}
              <ListItemName>{item.username}</ListItemName>
              <ListItemIntroduce>{item.desc ?? `안녕하세요 ${item.username}입니다.`}</ListItemIntroduce>
              <ListItemBtns>
                {/* <ListItemButton>친구추가</ListItemButton> */}
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
