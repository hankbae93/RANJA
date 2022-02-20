import { useSelector } from 'react-redux';
import { RootState } from '../types';

const useAuth = () => {
  const user = useSelector<RootState, object | null>((state) => state.auth.user);

  return user;
};

export default useAuth;
