/* eslint-disable no-restricted-syntax */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SignUpForm } from '../components';
import { IMGBB_KEY } from '../url';
import { FormDataType } from '../types';

interface ReqDataTyp {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  profileImg?: string;
  lat: number;
  lng: number;
}

const SignUpContainer = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<FormDataType>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [location, setLocation] = useState<{ address: string; coordinates: number[] }>({
    address: '',
    coordinates: [0, 0],
  });
  const loading = useRef(false);

  const inputs = [
    {
      keyId: 1,
      id: 'username',
      name: 'username',
      type: 'text',
      required: true,
      label: '닉네임',
      placeholder: '닉네임을 입력해주세요',
      pattern: '^[a-zA-Zㄱ-힣]{3,16}$',
      errorMessage: '이름은 3-16자 내로 작성해주세요(특수문자 제외)',
    },
    {
      keyId: 2,
      id: 'email',
      name: 'email',
      type: 'email',
      required: true,
      label: '이메일',
      placeholder: '이메일을 입력해주세요',
      errorMessage: '이메일 형식으로 적어주세요',
    },
    {
      keyId: 4,
      id: 'password',
      name: 'password',
      type: 'password',
      required: true,
      label: '비밀번호',
      placeholder: '8-20자 내외로 숫자와 특수문자를 포함해서 입력해주세요',
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      errorMessage: '비밀번호는 8-20자 내외에서 적어도 1개 이상의 숫자와 1개의 특수문자를 포함해야됩니다.',
    },
    {
      keyId: 5,
      id: 'confirmPassword',
      name: 'confirmPassword',
      type: 'password',
      required: true,
      pattern: value.password,
      label: '비밀번호 확인',
      placeholder: '다시 비밀번호를 입력해주세요',
      errorMessage: '비밀번호가 일치하지 않습니다.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      loading.current = true;
      const data: ReqDataTyp = {
        ...value,
        lat: location.coordinates[1],
        lng: location.coordinates[0],
      };
      if (file) {
        const imgFormData = new FormData();
        imgFormData.append('key', IMGBB_KEY);
        imgFormData.append('image', file);
        const imgUploadRes = await fetch('https://api.imgbb.com/1/upload', {
          method: 'POST',
          body: imgFormData,
        }).then((res) => res.json());
        const imgUrl = imgUploadRes.data.url;
        data.profileImg = imgUrl;
      }
      await axios.post('/auth/register', data);
      loading.current = false;
      navigate('/login');
    } catch (err) {
      loading.current = false;
      console.error(err);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { files },
    } = e;
    if (!files) return;
    if (files[0]) {
      setFile(files[0]);
    } else {
      setFile(null);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SignUpForm
      value={value}
      list={inputs}
      handleSubmit={handleSubmit}
      onChange={onChange}
      onFileChange={onFileChange}
      loading={loading.current}
      location={location}
      setLocation={setLocation}
    />
  );
};

export default SignUpContainer;
