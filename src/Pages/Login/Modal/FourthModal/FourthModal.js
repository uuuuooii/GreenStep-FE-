//react import
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../../../../Redux/modules/instance';
import {
  FourthModalBody,
  FourthModalSection,
  ModalHeader,
  TopText,
  SelectBody,
  ButtonText,
  TotalEmailArea,
  CheckMailArea,
  CheckMailIcon,
  CheckMailText,
  EmailButtonArea,
  EmailButton,
  EmailStrong,
  EmailP,
} from './FourthModalStyled';
import { Fade } from 'react-reveal';

const FourthModal = ({
  display,
  setDisplay,
  name,
  nickname,
  img,
}) => {
    const navigate = useNavigate()
    const [acceptMail, setAcceptMail] = useState(false);
    const userinfo = {
      name: name,
      nickname: nickname,
      profilePhoto: img,
      acceptMail: acceptMail,
    };
  return (
    <FourthModalBody display={display}>
      <FourthModalSection>
        <ModalHeader>
          <ButtonText
            onClick={() => (setDisplay(3))}
          >
            이전
          </ButtonText>
          <TopText>닉네임 설정</TopText>
        </ModalHeader>

        <SelectBody>
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
                      instance.patch(`/users/info`, userinfo).then((res) => {
                        navigate('/mission');
                      })
                    }
                  >
                    회원가입
                  </EmailButton>
                </EmailButtonArea>{' '}
              </Fade>
            ) : null}
          </TotalEmailArea>
        </SelectBody>
      </FourthModalSection>
    </FourthModalBody>
  );
};

export default FourthModal;
