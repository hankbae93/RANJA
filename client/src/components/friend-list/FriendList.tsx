import React from 'react';
import useAuth from '../../hooks/useAuth';
import useMap from '../../hooks/useMap';
import useNewRoom from '../../hooks/useNewRoom';
import { UserInfoType } from '../../types';
import {
  List,
  ListItem,
  ListItemBtns,
  ListItemButton,
  ListItemImg,
  ListItemInfo,
  ListItemIntroduce,
  ListItemName,
} from './FriendList.elements';

const FriendList = ({ list }: { list: UserInfoType[] }) => {
  const user = useAuth();
  const { chat } = useNewRoom();
  const { moveMap } = useMap();

  return (
    <List>
      {list.map((item, i) => {
        return (
          item.username !== user?.username && (
            <ListItem key={item.username}>
              <ListItemImg alt="" src={item.profileImg || 'http://placehold.it/320x100'} />

              <ListItemInfo>
                <ListItemName>{item.username}</ListItemName>
                <ListItemIntroduce>{item.desc ?? `안녕하세요 ${item.username}입니다.`}</ListItemIntroduce>
                <ListItemBtns>
                  {/* <ListItemButton>친구추가</ListItemButton> */}
                  <ListItemButton onClick={() => chat(item.username)}>채팅</ListItemButton>
                  <ListItemButton
                    onClick={() => moveMap({ lat: item.location.coordinates[1], lng: item.location.coordinates[0] })}
                  >
                    친구네 집
                  </ListItemButton>
                </ListItemBtns>
              </ListItemInfo>
            </ListItem>
          )
        );
      })}
    </List>
  );
};

export default FriendList;
