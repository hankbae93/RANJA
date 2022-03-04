import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  width: 200px;
  max-height: 300px;
  margin-bottom: 5px;
`;
export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const InfoThumbnail = styled.img`
  width: 100px;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

export const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.subTxt};
`;

export const InfoButtons = styled.div``;

export const InfoButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.txtColor};
  }
  /* padding: 5px; */
  span {
    display: none;
  }
`;
