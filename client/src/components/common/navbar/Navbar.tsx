import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CursorFill, HouseFill, HeartFill, ChatFill, GearFill } from '@styled-icons/bootstrap';
import { Nav, Menu } from './Navbar.elements';

const Navbar = () => {
  const linksData = [
    {
      icon: <HouseFill />,
      path: '/',
      title: 'Home',
    },
    {
      icon: <CursorFill />,
      path: '/discover',
      title: 'Discover',
    },
    {
      icon: <HeartFill />,
      path: '/favorite',
      title: 'Favorite',
    },
    {
      icon: <ChatFill />,
      path: '/chat',
      title: 'Chat',
    },
    {
      icon: <GearFill />,
      path: '/settings',
      title: 'Settings',
    },
  ];
  const [isPaths, setIsPaths] = useState<boolean[]>(Array(linksData.length).fill(false));

  const location = useLocation();

  useEffect(() => {
    if (location.pathname) {
      const index = linksData.findIndex((link) => link.path === location.pathname);
      setIsPaths((prev) =>
        prev.map((isPath, i) => {
          return index === i;
        }),
      );
    }
  }, [location]);

  return (
    <Nav>
      <ul>
        {linksData.map((link, i) => (
          <Menu isClick={isPaths[i]}>
            <Link to={link.path}>
              {link.icon}
              <span>{link.title}</span>
            </Link>
          </Menu>
        ))}
      </ul>
    </Nav>
  );
};

export default Navbar;
