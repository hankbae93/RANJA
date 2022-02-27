import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const InfoHead = styled.div`
  width: 200px;
  height: 150px;
  margin-bottom: 5px;
`;

export const InfoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.subTxt};
`;
