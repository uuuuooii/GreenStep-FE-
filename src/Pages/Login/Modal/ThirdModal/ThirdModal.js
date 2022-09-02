import React, { useState } from 'react';
import axios from 'axios';
import {
  ThirdModalBody,
  ThirdModalSection,
  ModalHeader,
  TopText,
  SelectBody,
  ButtonText,
  CenterContainer,
  ProfileImg,
  TextInput,
} from './ThirdModalStyled';
import instance from '../../../../Redux/modules/instance';

const URL = process.env.REACT_APP_URL;
const ThirdModal = ({
  display,
  setDisplay,
  check,
  setNickname,
  setName,
  name,
  nickname,
  img,
  user,
}) => {
  const userinfo = { name: name, nickname: nickname, profilePhoto: img };
console.log(userinfo)
  return (
    <ThirdModalBody display={display}>
      <ThirdModalSection>
        <ModalHeader>
          <ButtonText
            onClick={() => (check == 1 ? setDisplay(1) : setDisplay(2))}
          >
            이전
          </ButtonText>
          <TopText>닉네임 설정</TopText>
          <ButtonText
            onClick={() =>
              name && nickname
                ? instance.patch(`http://54.180.30.74/users/users/info`, userinfo)
                : alert('빈칸을 입력해주세요')
            }
          >
            완료
          </ButtonText>
        </ModalHeader>
        <SelectBody>
          <CenterContainer>
            <ProfileImg src={img} />
            <TextInput onChange={setName} placeholder="이름" />
            <TextInput onChange={setNickname} placeholder="닉네임" />
          </CenterContainer>
        </SelectBody>
      </ThirdModalSection>
    </ThirdModalBody>
  );
};

export default ThirdModal;
