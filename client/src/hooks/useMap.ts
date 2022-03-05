import { useDispatch } from 'react-redux';
import { update } from '../redux/modules/map';
import { MapCenterType } from '../types';

const useMap = () => {
  const dispatch = useDispatch();

  const moveMap = (center: MapCenterType) => {
    dispatch(update(center));
  };

  return { moveMap };
};

export default useMap;
