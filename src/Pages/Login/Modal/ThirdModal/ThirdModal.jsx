//react import
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../../../Redux/modules/instance';
import useMoveScrool from '../../../../hooks/useMoveScroll';

//styled import
import {
  ThirdModalBody,
  ThirdModalSection,
  ModalHeader,
  TopText,
  SelectBody,
  ButtonText,
  TotalEmailArea,
  CenterContainer,
  ProfileImg,
  TextInput,
  CheckMailArea,
  CheckMailIcon,
  CheckMailText,
  EmailButtonArea,
  EmailButton,
  EmailStrong,
  EmailP,
  ProfileArea,
  TargetDiv
} from './ThirdModalStyled';
import Fade from 'react-reveal/Fade';
import { useRef } from 'react';

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
  const [toBottom, setToBottom] = useState(false);
  const navigate = useNavigate();
  const userinfo = {
    name: name,
    nickname: nickname,
    profilePhoto: img,
    acceptMail: acceptMail,
  };

const scrollTarget = useRef()

  return (
    <ThirdModalBody display={display}  >
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
            <TotalEmailArea>
              <EmailStrong>마케팅 활용 동의 및 광고 수신 동의</EmailStrong>
              <EmailP>
                서비스와 관련된 신상품 소식, 이벤트 안내, 고객 혜택 등 다양한
                정보를 제공합니다.
              </EmailP>
              <CheckMailArea onClick={() => setAcceptMail(!acceptMail)}>
                {' '}
                <CheckMailIcon
                  background={!acceptMail ? 'white' : '#34BEA7'}
                  color={!acceptMail ? '#34BEA7' : 'white'}
                />
                <CheckMailText>이메일 알림 수신동의</CheckMailText>
              </CheckMailArea>
              {nickname && name ? (
                <Fade>
                  {' '}
                  <EmailButtonArea>
                    {' '}
                    <EmailButton
                      onClick={() =>
                        name && nickname
                          ? instance
                              .patch(`${URL}/users/info`, userinfo)
                              .then(navigate('/mission'))
                          : alert('빈칸을 입력해주세요')
                      }
                    >
                      회원가입
                    </EmailButton>
                  </EmailButtonArea>{' '}
                </Fade>
              ) : null}
              <TargetDiv ref={scrollTarget} />
            </TotalEmailArea>
          </CenterContainer>
        </SelectBody>
      </ThirdModalSection>
    </ThirdModalBody>
  );
};

export default ThirdModal;
