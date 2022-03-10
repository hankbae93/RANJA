import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, DoorOpen, PersonCircle } from '@styled-icons/bootstrap';
import { useDispatch } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import { Head, HeadRight, Logo, HeadIconButton, HeadProfile } from './Header.elements';
import { logout as logoutSagaStart } from '../../../redux/modules/auth';

const Header = () => {
  const dispatch = useDispatch();
  const user = useAuth();

  const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(logoutSagaStart());
  };

  return (
    <Head>
      <Logo>RANJA</Logo>

      <HeadRight className="header-right">
        {user && (
          <HeadIconButton type="button" onClick={logout}>
            <DoorOpen />
          </HeadIconButton>
        )}

        <HeadIconButton type="button">
          <Link to="/notification">
            <Bell />
          </Link>
        </HeadIconButton>

        <HeadProfile as="div">
          <Link to={user ? '/mypage' : '/login'}>
            {user && user.profileImg ? <img src={user.profileImg} alt={user.username} /> : <PersonCircle />}
          </Link>
        </HeadProfile>
      </HeadRight>
    </Head>
  );
};

export default Header;
