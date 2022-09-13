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
}) => {
  const [acceptMail, setAcceptMail] = useState(false);
  const [third, setThird] = useState(false);

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
            <InputDiv>
              <TextInput
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="이름"
                maxLength={8}
              />
              <PencilDiv>
                <PencilIcon />
              </PencilDiv>
            </InputDiv>
            <InputDiv>
              <TextInput
                onChange={(e) => setNickname(e.target.value)}
                value={nickname}
                placeholder="닉네임"
                maxLength={8}
              />
              <PencilDiv>
                <PencilIcon />
              </PencilDiv>
            </InputDiv>
          </ProfileArea>
        </CenterContainer>
      </SelectBody>
    </>
  );
};

export default ThirdModal;
