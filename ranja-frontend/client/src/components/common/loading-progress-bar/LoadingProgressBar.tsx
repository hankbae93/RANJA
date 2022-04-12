import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ArrowClockwise } from '@styled-icons/bootstrap';

const LoadingAnimation = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  animation: ${LoadingAnimation} 2s infinite linear;
`;

const LoadingProgressBar = () => {
  return (
    <Loader>
      <ArrowClockwise style={{ width: '15%' }} />
    </Loader>
  );
};

export default LoadingProgressBar;
