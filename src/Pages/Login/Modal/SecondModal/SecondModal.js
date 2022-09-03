//react import
import React, { useState } from 'react';
//styled import
import {
  SecondModalBody,
  SecondModalSection,
  ModalHeader,
  TopText,
  SelectImg,
  ImgDiv,
  ImgArea,
  SelectBody,
  ButtonText,
} from './SecondModalStyled';
// import KakaoTalk_20220903_023459515_01 from "../../../../static/images/KakaoTalk_20220903_023459515_01"

const URL = process.env.REACT_APP_URL;
const SecondModal = ({ display, setDisplay, setImg, img }) => {
  const imgList = [
    '/images/고양이.png',
    '/images/돼지.png',
    '/images/부엉이.png',
    '/images/새.png',
    '/images/토끼.png',
    '/images/펭귄.png',
  ];
  return (
    <SecondModalBody display={display}>
      <SecondModalSection>
        <ModalHeader>
          <ButtonText onClick={() => setDisplay(1)}>이전</ButtonText>
          <TopText>프로필 사진</TopText>
          <ButtonText
            onClick={() =>
              img ? setDisplay(3) : alert('캐릭터를 선택해주세요.')
            }
          >
            다음
          </ButtonText>
        </ModalHeader>
        <SelectBody>
          <ImgArea>
            {imgList.map((item, index) => (
              <ImgDiv key={item}>
                <SelectImg
                  src={item}
                  onClick={() => (img == item ? setImg('') : setImg(item))}
                  check={item}
                  select={img}
                />
                <TopText>{index + 1}번캐릭터</TopText>
              </ImgDiv>
            ))}
          </ImgArea>
        </SelectBody>
      </SecondModalSection>
    </SecondModalBody>
  );
};

export default SecondModal;
