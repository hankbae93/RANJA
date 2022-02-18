import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
`;

export const HomeHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 0;
  margin-bottom: 35px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.titleLineColor};
`;

export const HomeHeading = styled.h2`
  color: ${({ theme }) => theme.colors.strongTxtColor};
`;

export const HomeHeadCounts = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.subTxtSize};
  color: ${({ theme }) => theme.colors.subTitleColor};
`;
