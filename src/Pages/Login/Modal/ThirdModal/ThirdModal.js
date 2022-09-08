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
  EmailButton,
  EmailStrong,
  EmailP
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
          
        </ModalHeader>
        <SelectBody>
          <CenterContainer>
            <ProfileImg src={img} />
            <TextInput onChange={setName} placeholder="이름" />
            <TextInput onChange={setNickname} placeholder="닉네임" />

<EmailStrong >마케팅 활용 동의 및 광고 수신 동의</EmailStrong>
<EmailP>서비스와 관련된 신상품 소식, 이벤트 안내, 고객 혜택 등 다양한 정보를 제공합니다.</EmailP>
            <CheckMailArea onClick={() => setAcceptMail(!acceptMail)}>
              {' '}
              <CheckMailIcon background={!acceptMail ? "white" : '#34BEA7'} color={!acceptMail ? '#34BEA7' : "white"} />
              <CheckMailText>이메일 알림 수신동의</CheckMailText>
              
            </CheckMailArea>
           {(nickname&&name) ? <EmailButton onClick={() =>
              name && nickname
                ? instance
                    .patch(`${URL}/users/info`, userinfo)
                    .then(navigate('/mission'))
                : alert('빈칸을 입력해주세요')
            } >회원가입</EmailButton> : null}
          </CenterContainer>
        </SelectBody>
      </ThirdModalSection>
    </ThirdModalBody>
  );
};

export default ThirdModal;
