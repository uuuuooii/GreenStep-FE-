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
  WarningText,
  WarningDiv,
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
  third,
  setThird,
  onClickToast,
}) => {
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

  var reg = /[^ㄱ-ㅎ가-힣a-zA-Z0-9]/g;
  //  /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
  return (
    <>
      <ModalHeader>
        <ButtonText onClick={() => (check == 1 ? OnFirst() : OnSecond())}>
          이전
        </ButtonText>
        <TopText>닉네임 설정</TopText>
        <ButtonText
          onClick={() =>
            name && nickname && !reg.test(name) && !reg.test(nickname)
              ? NextModal()
              : onClickToast('빈칸을 확인해주세요')
          }
        >
          다음
        </ButtonText>
      </ModalHeader>

      <SelectBody third={third}>
        <CenterContainer>
          <ProfileArea>
            <ProfileImg src={img} />
            <InputDiv color={name ? '#b2e2ab' : '#d9d9d9'}>
              <TextInput
                color={name ? '#b2e2ab' : '#d9d9d9'}
                onChange={setName}
                defaultValue={name ? name : ''}
                placeholder="이름"
                maxLength={8}
                type="text"
              />
              <PencilDiv>
                <PencilIcon color={name ? '#b2e2ab' : '#d9d9d9'} />
              </PencilDiv>
            </InputDiv>
            <WarningDiv>
              {' '}
              {reg.test(name) ? (
                <WarningText>사용할 수 없는 문자가 포함되었습니다</WarningText>
              ) : (
                <WarningText>최대 8글자</WarningText>
              )}
            </WarningDiv>

            <InputDiv color={nickname ? '#b2e2ab' : '#d9d9d9'}>
              <TextInput
                color={nickname ? '#b2e2ab' : '#d9d9d9'}
                onChange={setNickname}
                defaultValue={nickname ? nickname : ''}
                placeholder="닉네임"
                maxLength={8}
                type="text"
              />
              <PencilDiv>
                <PencilIcon color={nickname ? '#b2e2ab' : '#d9d9d9'} />
              </PencilDiv>
            </InputDiv>
            <WarningDiv>
              {reg.test(nickname) ? (
                <WarningText>사용할 수 없는 문자가 포함되었습니다</WarningText>
              ) : (
                <WarningText>최대 8글자</WarningText>
              )}
            </WarningDiv>
          </ProfileArea>
        </CenterContainer>
      </SelectBody>
    </>
  );
};

export default ThirdModal;
