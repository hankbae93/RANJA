import styled from 'styled-components';
import { Input } from '../common/form/form.elements';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  height: 100%;
`;

export const LoginField = styled.div`
  width: 70%;
`;

export const LoginLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const LabelSpan = styled.span`
  width: 100px;
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
`;

export const LoginButton = styled.button`
  margin-top: 100px;
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.txt};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const LoginInput = styled(Input)`
  flex: 1;
`;
