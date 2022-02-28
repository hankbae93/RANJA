import { useSelector } from 'react-redux';
import { MapState, RootState } from '../types';

const useReduxMap = () => {
  const { friends, aroundUsers } = useSelector<RootState, MapState>((state) => state.map);

  return { friends, aroundUsers };
};

export default useReduxMap;
