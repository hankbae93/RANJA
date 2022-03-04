import React from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import useNewRoom from '../../hooks/useNewRoom';
import useReduxMap from '../../hooks/useReduxMap';
import { RootState, UserInfoType } from '../../types';
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
} from '../friend-list/FriendList.elements';

interface DiscoverListProps {
  addFriends: (name: string) => Promise<void>;
}

const DiscoverList = ({ addFriends }: DiscoverListProps) => {
  const aroundUsers = useSelector<RootState, UserInfoType[]>((state) => state.map.aroundUsers);
  const user = useAuth();
  const { friends } = useReduxMap();
  const { chat } = useNewRoom();

  return (
    <List>
      {aroundUsers.map((item, i) => {
        if (item.username === user?.username) return null;

        return (
          <ListItem key={item.username}>
            <ListItemImg alt="" src={item.profileImg || 'http://placehold.it/320x100'} />

            <ListItemInfo>
              <ListItemName>{item.username}</ListItemName>
              <ListItemIntroduce>{item.desc ?? `안녕하세요 ${item.username}입니다.`}</ListItemIntroduce>
              <ListItemBtns>
                {!friends.some((el) => el.username === item.username) ? (
                  <ListItemButton onClick={() => addFriends(item.username)}>친구추가</ListItemButton>
                ) : (
                  <ListItemButton onClick={() => chat(item.username)}>채팅</ListItemButton>
                )}

                <ListItemButton>친구네 집</ListItemButton>
              </ListItemBtns>
            </ListItemInfo>
          </ListItem>
        );
      })}
    </List>
  );
};

export default DiscoverList;
