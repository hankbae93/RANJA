/* eslint-disable react/jsx-props-no-spreading */
import React, { Dispatch, SetStateAction, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { FormDataType, InputDefaultTypes } from '../../types';
import LoadingProgressBar from '../common/loading-progress-bar/LoadingProgressBar';
import {
  SignUpField,
  SignUpFormContainer,
  SignUpInput,
  SignUpLabel,
  SignUpLabelSpan,
  SignUpButton,
  DaumModal,
} from './SignUp.elements';

interface InputProps {
  value: FormDataType;
  list: InputDefaultTypes[];
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  location: { address: string; coordinates: number[] };
  setLocation: Dispatch<SetStateAction<{ address: string; coordinates: number[] }>>;
}

const SignUpForm = ({
  value,
  list,
  onChange,
  handleSubmit,
  onFileChange,
  loading,
  location,
  setLocation,
}: InputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const onComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    test(fullAddress);
  };

  const test = async (road: string) => {
    try {
      const api = process.env.REACT_APP_KAKAO_API_KEY ?? '';
      const headers = { Authorization: `KakaoAK ${api}` };
      const url = `https://dapi.kakao.com/v2/local/search/address.json?&query=${encodeURI(road)}`;

      const data = await fetch(`${url}`, {
        method: 'GET',
        headers,
      })
        .then((res) => res.json())
        .then(function (data) {
          const lat = data.documents[0].y && Number(data.documents[0].y);
          const lng = data.documents[0].x && Number(data.documents[0].x);
          return { lat, lng };
        });
      setLocation((prev) => ({ ...prev, address: road, coordinates: [data.lng, data.lat] }));
      setIsOpen(false);
    } catch (err) {
      setIsOpen(false);
      console.log(err);
    }
  };

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
          <SignUpInput type="file" id="file" accept="image/png, image/jpeg" onChange={onFileChange} />
        </SignUpLabel>
      </SignUpField>
      <SignUpField>
        <SignUpLabel htmlFor="locaton">
          <SignUpLabelSpan>주소</SignUpLabelSpan>
          <SignUpInput as="div" onClick={() => setIsOpen(true)}>
            {location.address ?? ''}
          </SignUpInput>
        </SignUpLabel>
      </SignUpField>

      {isOpen && (
        <DaumModal>
          <DaumPostcode onComplete={onComplete} style={{ height: '100%' }} />
        </DaumModal>
      )}

      <SignUpButton type="submit">{loading ? <LoadingProgressBar /> : '회원가입'}</SignUpButton>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
