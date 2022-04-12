import styled from 'styled-components';

export const Nav = styled.nav`
  padding-top: 100px;
`;

export const Menu = styled.li<{ isClick: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 160px;
  height: 45px;
  padding-left: 34px;
  margin-bottom: 30px;
  border-radius: 15px;
  background-color: ${(props) => (props.isClick ? props.theme.colors.bgActiveColor : props.theme.colors.bgColor)};

  a {
    color: ${(props) => (props.isClick ? props.theme.colors.navActiveTxtColor : props.theme.colors.navTxtColor)};
  }

  svg {
    width: 24px;
    height: 21px;
    margin-right: 5px;
    color: inherit;
  }

  span {
    font-size: 16px;
    color: inherit;
  }
`;
