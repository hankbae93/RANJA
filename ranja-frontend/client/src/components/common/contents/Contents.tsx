import React, { ReactNode } from 'react';
import { Container, ContentHead, ContentHeading, ContentBox } from './Contents.elements';

const Contents = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <Container>
      <ContentHead>
        <ContentHeading>{title}</ContentHeading>
      </ContentHead>

      <ContentBox>{children}</ContentBox>
    </Container>
  );
};

export default Contents;
