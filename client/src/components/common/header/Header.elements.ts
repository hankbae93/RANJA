import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.h1`
  padding-left: 17px;
  font-size: 40px;
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
  background: none;
  color: #000;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    box-shadow: 1px 1px 3px 1px rgb(0 0 0 / 25%);
  }

  svg {
    width: 65%;
    height: 65%;
    color: ${(props) => props.theme.colors.txtColor};
  }
`;

export const HeadProfile = styled(HeadIconButton)`
  overflow: hidden;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    /* width: 80%;
    height: 80%; */
  }
`;
