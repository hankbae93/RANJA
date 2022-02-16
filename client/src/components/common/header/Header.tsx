import React from 'react';
import styled from 'styled-components';

export const Headings = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .header-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Header = () => {
  return (
    <Headings>
      <h1>RANJA</h1>
      <div className="header-right">
        <button type="button">Notification</button>
        <div>Profile</div>
      </div>
    </Headings>
  );
};

export default Header;
