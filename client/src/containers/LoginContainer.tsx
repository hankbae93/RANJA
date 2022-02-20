import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { LoginForm } from '../components';
import { login as loginSagaStart } from '../redux/modules/auth';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(loginSagaStart({ email, password }));
  };
  return (
    <LoginForm
      email={email}
      handleEmail={handleEmail}
      password={password}
      handlePassword={handlePassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
