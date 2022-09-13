//react import
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//styled import
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
  ProfileArea,
} from './ThirdModalStyled';
import Fade from 'react-reveal/Fade';
import { useRef } from 'react';

const URL = process.env.REACT_APP_URL;
const ThirdModal = ({
  display,
  setDisplay,
  setNickname,
  setName,
  name,
  check,
  nickname,
  img,
}) => {
  const [acceptMail, setAcceptMail] = useState(false);
  const [third, setThird] = useState(false);
  const userinfo = {
    name: name,
    nickname: nickname,
    profilePhoto: img,
    acceptMail: acceptMail,
  };
  const NextModal = () => {
    setDisplay(4);
    setThird(true);
  };
  const OnFirst = () => {
    setDisplay(1);
    setThird(true);
  };
  const OnSecond = () => {
    setDisplay(2);
    setThird(true);
  };
  return (
    <ThirdModalBody display={display}>
      <ThirdModalSection>
        <ModalHeader>
          <ButtonText onClick={() => (check == 1 ? OnFirst() : OnSecond())}>
            이전
          </ButtonText>
          <TopText>닉네임 설정</TopText>
          <ButtonText
            onClick={() =>
              name && nickname ? NextModal() : alert('빈칸을 입력해주세요')
            }
          >
            다음
          </ButtonText>
        </ModalHeader>

        <SelectBody third={third}>
          <CenterContainer>
            <ProfileArea>
              <ProfileImg src={img} />

              <TextInput
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="이름"
                maxLength={8}
              />
              <TextInput
                onChange={(e) => setNickname(e.target.value)}
                value={nickname}
                placeholder="닉네임"
                maxLength={8}
              />
            </ProfileArea>
          </CenterContainer>
        </SelectBody>
      </ThirdModalSection>
    </ThirdModalBody>
  );
};

export default ThirdModal;
