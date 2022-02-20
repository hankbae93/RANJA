import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const user = useSelector<RootState>((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  return children;
};

export default RequireAuth;
