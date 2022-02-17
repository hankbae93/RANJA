import React from 'react';
import { CursorFill, HouseFill, HeartFill, ChatFill, GearFill } from '@styled-icons/bootstrap';
import { Link } from 'react-router-dom';
import { Nav, Menu } from './Navbar.elements';

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <Menu isClick>
          <Link to="/">
            <HouseFill />
            <span>HOME</span>
          </Link>
        </Menu>
        <Menu isClick={false}>
          <Link to="/">
            <CursorFill />
            Discover
          </Link>
        </Menu>
        <Menu isClick={false}>
          <Link to="/">
            <HeartFill />
            Favorite
          </Link>
        </Menu>
        <Menu isClick={false}>
          <Link to="/">
            <ChatFill />
            Chat
          </Link>
        </Menu>
        <Menu isClick={false}>
          <Link to="/">
            <GearFill />
            Settings
          </Link>
        </Menu>
      </ul>
    </Nav>
  );
};

export default Navbar;
