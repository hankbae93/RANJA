/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FormDataType, InputDefaultTypes } from '../../types';
import LoadingProgressBar from '../common/loading-progress-bar/LoadingProgressBar';
import {
  SignUpField,
  SignUpFormContainer,
  SignUpInput,
  SignUpLabel,
  SignUpLabelSpan,
  SignUpButton,
} from './SignUp.elements';

interface InputProps {
  value: FormDataType;
  list: InputDefaultTypes[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  file: File | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpForm = ({ value, list, onChange, handleSubmit, file, onFileChange }: InputProps) => {
  return (
    <SignUpFormContainer onSubmit={handleSubmit}>
      {list.map((input) => {
        const { keyId, label, errorMessage, ...inputProps } = input;
        return (
          <SignUpField key={keyId}>
            <SignUpLabel htmlFor={input.id}>
              <SignUpLabelSpan>{label}</SignUpLabelSpan>
              <SignUpInput {...inputProps} value={value[input.name]} onChange={onChange} />
            </SignUpLabel>
            <p style={{ display: 'none' }}>{errorMessage}</p>
          </SignUpField>
        );
      })}
      <SignUpField>
        <SignUpLabel htmlFor="file">
          <SignUpLabelSpan>프로필 사진</SignUpLabelSpan>
          <SignUpInput
            type="file"
            id="file"
            accept="image/png, image/jpeg"
            // value={file}
            onChange={onFileChange}
          />
        </SignUpLabel>
      </SignUpField>
      <SignUpButton type="submit">회원가입</SignUpButton>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
