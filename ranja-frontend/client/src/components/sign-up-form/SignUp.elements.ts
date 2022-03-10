import styled from 'styled-components';
import { Input, Form, FormField, FormLabel, FormLabelSpan, FormButton } from '../common/form/form.elements';

export const SignUpFormContainer = styled(Form)`
  justify-content: flex-start;
`;
export const SignUpField = styled(FormField)``;
export const SignUpLabel = styled(FormLabel)``;
export const SignUpLabelSpan = styled(FormLabelSpan)`
  font-size: ${({ theme }) => theme.fontSizes.txt};
`;
export const SignUpButton = styled(FormButton)``;
export const SignUpInput = styled(Input)`
  flex: 1;
`;

// 모달
export const DaumModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  z-index: 10;
  box-shadow: 1px 1px 10px 4px rgba(0, 0, 0, 0.3);
`;
