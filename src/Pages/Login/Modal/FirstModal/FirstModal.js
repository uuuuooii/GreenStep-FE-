import React, { useState } from 'react';
import {
  FirstModalBody,
  FirstModalSection,
  ModalHeader,
  TopText,
  SelectBody,
  ImgArea,
  SelectImg,
  SeleceArea,
  ImgDiv,
  ButtonText,
  DummyText,
} from './FirstModalStyled';

const FirstModal = ({ display, setDisplay, setImg, setCheck, check }) => {
  const Next = () => {
    check == 1 ? setDisplay(3) : setDisplay(2);
  };
  return (
    <FirstModalBody display={display}>
      <FirstModalSection>
        <ModalHeader>
          <DummyText></DummyText>
          <TopText>프로필 사진</TopText>
          <ButtonText
            onClick={() => {
              check == 0 ? alert('선택해주세요') : Next();
            }}
            check={check}
          >
            다음
          </ButtonText>
        </ModalHeader>

        <SelectBody>
          <ImgArea>
            <SeleceArea>
              <ImgDiv>
                <SelectImg
                  src="https://blog.kakaocdn.net/dn/Sq4OD/btqzlkr13eD/dYwFnscXEA6YIOHckdPDDk/img.jpg"
                  onClick={() => {
                    check == 1 ? setCheck(0) : setCheck(1);
                    setImg(
                      'http://heestudio.kr/common/img/default_profile.png'
                    );
                  }}
                  check={check}
                  num={1}
                />
                <TopText>카카오톡 프로필</TopText>
              </ImgDiv>

              <ImgDiv>
                <SelectImg
                  src="https://cdn.pixabay.com/photo/2018/03/13/06/19/lion-3221778__340.png"
                  onClick={() => {
                    check == 2 ? setCheck(0) : setCheck(2);
                  }}
                  check={check}
                  num={2}
                />
                <TopText>프로필 캐릭터 선택</TopText>
              </ImgDiv>
            </SeleceArea>
          </ImgArea>
        </SelectBody>
      </FirstModalSection>
    </FirstModalBody>
  );
};

export default FirstModal;
