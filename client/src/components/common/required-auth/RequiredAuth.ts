import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import { loadMyInfo as loadMyInfoSagaStart } from '../../../redux/modules/auth';
import { getFriends as getFriendsSagaStart } from '../../../redux/modules/map';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const user = useAuth();

  useEffect(() => {
    dispatch(loadMyInfoSagaStart());
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(getFriendsSagaStart());
    }
  }, [user]);

  return children;
};

export default RequireAuth;
