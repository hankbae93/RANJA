/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthState, RootState } from '../../types';
import LoadingProgressBar from '../common/loading-progress-bar/LoadingProgressBar';
import { LoginForm as Form, LoginInput, LoginField, LoginLabel, LabelSpan, LoginButton } from './LoginForm.elements';

interface LoginPropsType {
  email: string;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm = ({ email, handleEmail, password, handlePassword, handleSubmit }: LoginPropsType) => {
  const { loading, error } = useSelector<RootState, AuthState>((state) => state.auth);

  return (
    <Form onSubmit={handleSubmit}>
      <LoginField>
        <LoginLabel htmlFor="email">
          <LabelSpan>이메일 </LabelSpan>
          <LoginInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}
            placeholder="이메일을 입력해주세요"
            required
          />
        </LoginLabel>
      </LoginField>

      <LoginField>
        <LoginLabel htmlFor="password">
          <LabelSpan>비밀번호 </LabelSpan>
          <LoginInput
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePassword}
            placeholder="비밀번호를 입력해주세요"
            required
          />
        </LoginLabel>
      </LoginField>
      <LoginButton type="submit">{loading ? <LoadingProgressBar /> : '로그인'}</LoginButton>
      <p>
        <Link to="/sign-up">회원가입</Link>
      </p>
      {error || null}
    </Form>
  );
};

export default LoginForm;
