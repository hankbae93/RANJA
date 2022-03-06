import { useCallback } from 'react';
import axios from '../../axios';
import useAuth from '../../hooks/useAuth';
import useMap from '../../hooks/useMap';
import useNewRoom from '../../hooks/useNewRoom';
import { UserInfoType } from '../../types';

const useCard = (item: UserInfoType) => {
  const user = useAuth();
  const { chat } = useNewRoom();
  const { moveMap } = useMap();

  const addFriends = useCallback(async () => {
    try {
      await axios.post(`/friendRequest/${item.username}`);
      alert('친구 요청이 성공하셧습니다.');
    } catch (err) {
      console.log(err);
    }
  }, [item]);

  const moveUserChat = useCallback(() => {
    chat(item.username);
  }, [item]);

  const moveUserHouse = useCallback(() => {
    const lat = item.location.coordinates[1];
    const lng = item.location.coordinates[0];
    const coord = { lat, lng };

    moveMap(coord);
  }, [item]);

  const acceptFriends = async (id: string, isAccept: boolean): Promise<void> => {
    try {
      await axios.post(`/friendRequest/accept/${id}`, { isAccept });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    addFriends,
    moveUserChat,
    moveUserHouse,
    acceptFriends,
  };
};

export default useCard;
