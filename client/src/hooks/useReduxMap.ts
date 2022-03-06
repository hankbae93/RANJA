import { useSelector } from 'react-redux';
import { MapState, RootState } from '../types';

const useReduxMap = () => {
  const { aroundUsers, center } = useSelector<RootState, MapState>((state) => state.map);

  return { aroundUsers, center };
};

export default useReduxMap;
