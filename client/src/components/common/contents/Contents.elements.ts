import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
`;

export const ContentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 0;
  margin-bottom: 35px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.titleLineColor};
`;

export const ContentHeading = styled.h2`
  color: ${({ theme }) => theme.colors.strongTxtColor};
`;

export const ContentBox = styled.div`
  height: 700px;
`;
