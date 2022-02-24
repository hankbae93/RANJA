import { useSelector } from 'react-redux';
import { RootState, UserInfoType } from '../types';

const useReduxMap = () => {
  const friends = useSelector<RootState, UserInfoType[] | []>((state) => state.map.friends);

  return friends;
};

export default useReduxMap;
