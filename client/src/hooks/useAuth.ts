import { useSelector } from 'react-redux';
import { RootState, UserInfoType } from '../types';

const useAuth = () => {
  const user = useSelector<RootState, UserInfoType | null>((state) => state.auth.user);

  return user;
};

export default useAuth;
