import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import { loadMyInfo as loadMyInfoSagaStart } from '../../redux/modules/auth';

const RequiredAuth = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAuth();

  useEffect(() => {
    dispatch(loadMyInfoSagaStart());
  }, []);

  useEffect(() => {
    const { pathname } = location;
    const publicPath = ['/home', '/discover', '/sign-up', '/login'];
    if (!publicPath.some((path) => path === pathname) && !user) {
      navigate('/discover');
    }
  }, [location.pathname]);

  return children;
};

export default RequiredAuth;
