//react import
import React, { useState } from 'react';

//styled import
import {
  ModalHeader,
  TopText,
  SelectBody,
  ButtonText,
  CenterContainer,
  ProfileImg,
  TextInput,
  ProfileArea,
  PencilDiv,
  PencilIcon,
  InputDiv,
} from './ThirdModalStyled';

const URL = process.env.REACT_APP_URL;
const ThirdModal = ({
  setDisplay,
  setNickname,
  setName,
  name,
  check,
  nickname,
  img,
  third,
  setThird,
  onClickToast,
}) => {
  const NextModal = () => {
    setDisplay(4);
    setThird(true);
  };
  const OnFirst = () => {
    setDisplay(1);
    setThird(false);
  };
  const OnSecond = () => {
    setDisplay(2);
    setThird(false);
  };
  return (
    <>
      <ModalHeader>
        <ButtonText onClick={() => (check == 1 ? OnFirst() : OnSecond())}>
          이전
        </ButtonText>
        <TopText>닉네임 설정</TopText>
        <ButtonText
          onClick={() =>
            name && nickname ? NextModal() : onClickToast('빈칸을 입력해주세요')
          }
        >
          다음
        </ButtonText>
      </ModalHeader>

      <SelectBody third={third}>
        <CenterContainer>
          <ProfileArea>
            <ProfileImg src={img} />
            <InputDiv color={name ? '#b2e2ab' : '#d9d9d9'}>
              <TextInput
                color={name ? '#b2e2ab' : '#d9d9d9'}
                onChange={setName}
                defaultValue={name? name : ''}
                placeholder="이름"
                maxLength={8}
              />
              <PencilDiv>
                <PencilIcon color={name ? '#b2e2ab' : '#d9d9d9'} />
              </PencilDiv>
            </InputDiv>
            <InputDiv color={nickname ? '#b2e2ab' : '#d9d9d9'}>
              <TextInput
                color={nickname ? '#b2e2ab' : '#d9d9d9'}
                onChange={setNickname}
                defaultValue={nickname? nickname : ''}
                placeholder="닉네임"
                maxLength={8}
              />
              <PencilDiv>
                <PencilIcon color={nickname ? '#b2e2ab' : '#d9d9d9'} />
              </PencilDiv>
            </InputDiv>
          </ProfileArea>
        </CenterContainer>
      </SelectBody>
    </>
  );
};

export default ThirdModal;
