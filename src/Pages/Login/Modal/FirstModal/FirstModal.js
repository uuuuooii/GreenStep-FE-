//react import
import React from 'react';
//styled import
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
  SelectText,
} from './FirstModalStyled';
import { useState } from 'react';

const FirstModal = ({
  display,
  setDisplay,
  setImg,
  setCheck,
  check,
  user,
  setNickname,
}) => {
  const [slide, setSlide] = useState(false);
  const Next = () => {
    check === 1 ? setDisplay(3) : setDisplay(2);
    setSlide(true);
    setNickname(user.nickname);
  };
  return (
    <FirstModalBody display={display}>
      <FirstModalSection>
        <ModalHeader>
          <DummyText></DummyText>
          <TopText>프로필 사진</TopText>
          <ButtonText
            onClick={() => {
              check === 0 ? alert('선택해주세요') : Next();
            }}
            check={check}
          >
            다음
          </ButtonText>
        </ModalHeader>
        <SelectBody slide={slide}>
          <ImgArea>
            <SeleceArea>
              <ImgDiv>
                <SelectImg
                  src={
                    user.profilePhoto
                      ? user.profilePhoto
                      : 'https://blog.kakaocdn.net/dn/Sq4OD/btqzlkr13eD/dYwFnscXEA6YIOHckdPDDk/img.jpg'
                  }
                  onClick={() => {
                    check === 1 ? setCheck(0) : setCheck(1);
                    setImg(user.profilePhoto);
                  }}
                  check={check}
                  num={1}
                />
                <SelectText>카카오톡 프로필</SelectText>
              </ImgDiv>

              <ImgDiv>
                <SelectImg
                  src="images/펭귄.png"
                  onClick={() => {
                    check === 2 ? setCheck(0) : setCheck(2);
                  }}
                  check={check}
                  num={2}
                />
                <SelectText>프로필 캐릭터 선택</SelectText>
              </ImgDiv>
            </SeleceArea>
          </ImgArea>
        </SelectBody>
      </FirstModalSection>
    </FirstModalBody>
  );
};

export default FirstModal;
