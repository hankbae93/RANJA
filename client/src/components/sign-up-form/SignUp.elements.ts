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
