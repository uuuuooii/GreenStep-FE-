import React, { useState } from 'react';
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

const URL = process.env.REACT_APP_URL;
const SecondModal = ({ display, setDisplay, setImg, img }) => {
  const imgList = [
    'https://cdn.pixabay.com/photo/2020/09/04/20/09/cartoon-5544856__340.jpg',
    'https://cdn.pixabay.com/photo/2020/10/18/20/43/dinosaur-5666127__340.png',
    'https://cdn.pixabay.com/photo/2014/04/03/10/00/panda-309548__340.png',
    'https://cdn.pixabay.com/photo/2018/02/24/10/02/apple-3177692__340.png',
    'https://cdn.pixabay.com/photo/2018/03/13/06/19/lion-3221778__340.png',
    'https://cdn.pixabay.com/photo/2018/03/21/05/55/pig-3245668__340.png',
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
