import React from 'react';
import { FriendRequestType } from '../../types';

const FriendRequestList = ({
  friendRequests,
  acceptFriends,
}: {
  friendRequests: FriendRequestType[];
  acceptFriends: (id: string, isAccept: boolean) => Promise<void>;
}) => {
  return (
    <div>
      친구 요청목록
      {/* {friendRequests.map((item, i) => {
        console.log(item.isAccept, 'dd');
        return (
          <ListItem key={item.username}>
            <ListItemImg alt="" src={item.profileImg || 'http://placehold.it/320x100'} />

            <ListItemInfo>
              <ListItemName>{item.username}</ListItemName>
              {/* <ListItemIntroduce>{item.desc ?? `안녕하세요 ${item.username}입니다.`}</ListItemIntroduce> 
              <ListItemBtns>
                {item.isAccept === undefined ? (
                  <>
                    <ListItemButton onClick={() => acceptFriends(item.id, true)}>수락</ListItemButton>
                    <ListItemButton onClick={() => acceptFriends(item.id, false)}>거절</ListItemButton>
                  </>
                ) : (
                  <p>{item.isAccept ? '수락하셧습니다.' : '거절하셨습니다.'}</p>
                )}
              </ListItemBtns>
            </ListItemInfo>
          </ListItem>
        );
      })} */}
    </div>
  );
};

export default FriendRequestList;
