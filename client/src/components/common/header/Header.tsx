import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from '@styled-icons/bootstrap';
import { Head, HeadRight, Logo, HeadIconButton, HeadProfile } from './Header.elements';

const Header = () => {
  return (
    <Head>
      <Logo>RANJA</Logo>

      <HeadRight className="header-right">
        <HeadIconButton type="button">
          <Link to="/notification">
            <Bell />
          </Link>
        </HeadIconButton>

        <HeadProfile as="div">
          <Link to="/mypage">
            <img src="assets/test_si.jpeg" alt="Profile" />
          </Link>
        </HeadProfile>
      </HeadRight>
    </Head>
  );
};

export default Header;
