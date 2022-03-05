import { useSelector } from 'react-redux';
import { MapState, RootState } from '../types';

const useReduxMap = () => {
  const { friends, aroundUsers, center } = useSelector<RootState, MapState>((state) => state.map);

  return { friends, aroundUsers, center };
};

export default useReduxMap;
