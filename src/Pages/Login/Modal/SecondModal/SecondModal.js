//react import
import React from "react";
//styled import
import {
  ModalHeader,
  TopText,
  SelectImg,
  ImgDiv,
  ImgArea,
  SelectBody,
  ButtonText,
} from "./SecondModalStyled";
// import KakaoTalk_20220903_023459515_01 from "../../../../static/images/KakaoTalk_20220903_023459515_01"

const URL = process.env.REACT_APP_URL;
const SecondModal = ({
  setDisplay,
  setImg,
  img,
  second,
  setSecond,
  onClickToast,
  name,
}) => {
  const imgList = [
    "/images/고양이.png",
    "/images/돼지.png",
    "/images/부엉이.png",
    "/images/새.png",
    "/images/토끼.png",
    "/images/펭귄.png",
  ];
  const NextThird = () => {
    setDisplay(3);
    setSecond(true);
  };

  return (
    <>
      <ModalHeader>
        <ButtonText
          onClick={() => {
            setDisplay(1);
            setSecond(false);
          }}
        >
          이전
        </ButtonText>
        <TopText>프로필 사진</TopText>
        <ButtonText
          onClick={() =>
            img ? NextThird() : onClickToast("캐릭터를 선택해주세요.")
          }
        >
          다음
        </ButtonText>
      </ModalHeader>
      <SelectBody second={second}>
        <ImgArea>
          {imgList.map((item) => (
            <ImgDiv key={item}>
              <SelectImg
                src={item}
                onClick={() => (img == item ? setImg("") : setImg(item))}
                check={item}
                select={img}
              />
            </ImgDiv>
          ))}
        </ImgArea>
      </SelectBody>
    </>
  );
};

export default SecondModal;
