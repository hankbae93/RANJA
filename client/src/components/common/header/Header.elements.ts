import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.h1`
  font-size: 32px;
  font-family: 'Roboto', sans-serif;
`;

export const HeadRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeadIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  cursor: pointer;

  :hover {
    box-shadow: 1px 1px 3px 1px rgb(0 0 0 / 25%);
  }

  svg {
    width: 20px;
  }
`;

export const HeadProfile = styled(HeadIconButton)`
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
