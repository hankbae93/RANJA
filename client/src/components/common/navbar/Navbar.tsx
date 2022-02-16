import React from 'react';
import { CursorFill, HouseFill, HeartFill, ChatFill, GearFill } from '@styled-icons/bootstrap';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <HouseFill />
          HOME
        </li>
        <li>
          <CursorFill />
          Discover
        </li>
        <li>
          <HeartFill />
          Favorite
        </li>
        <li>
          <ChatFill />
          Chat
        </li>
        <li>
          <GearFill />
          Settings
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
