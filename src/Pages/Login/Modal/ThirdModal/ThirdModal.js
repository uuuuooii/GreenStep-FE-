import React, { useState } from 'react';
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
  CheckMailArea,
  CheckMailIcon,
  CheckMailText,
} from './ThirdModalStyled';
import instance from '../../../../Redux/modules/instance';
import { useNavigate } from 'react-router-dom';

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
}) => {
  const [acceptMail, setAcceptMail] = useState(false);
  const userinfo = {
    name: name,
    nickname: nickname,
    profilePhoto: img,
    acceptMail: acceptMail,
  };
  const navigate = useNavigate();
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
                ? instance
                    .patch(`${URL}/users/info`, userinfo)
                    .then(navigate('/mission'))
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

            <CheckMailArea onClick={() => setAcceptMail(!acceptMail)}>
              {' '}
              <CheckMailIcon background={!acceptMail ? "white" : "black"} color={!acceptMail ? "black" : "white"} />
              <CheckMailText>이메일 알림 수신동의</CheckMailText>
            </CheckMailArea>
          </CenterContainer>
        </SelectBody>
      </ThirdModalSection>
    </ThirdModalBody>
  );
};

export default ThirdModal;
