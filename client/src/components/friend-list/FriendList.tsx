import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useNewRoom from '../../hooks/useNewRoom';
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
  const navigate = useNavigate();
  const user = useAuth();
  const createRoom = useNewRoom();

  const chat = async (username: string, max?: number) => {
    try {
      const txt = await createRoom(username, max);
      if (txt !== '실패') {
        navigate(`/chat/${username}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
                  <ListItemButton>친구네 집</ListItemButton>
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
