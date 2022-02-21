import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadMyInfo as loadMyInfoSagaStart } from '../../../redux/modules/auth';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMyInfoSagaStart());
  }, []);

  return children;
};

export default RequireAuth;
