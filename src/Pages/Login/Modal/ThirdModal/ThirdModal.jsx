//react import
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
  ErrorText,
  WarningDiv,
} from './ThirdModalStyled';
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
  user,
}) => {
  const [valid, setValid] = useState({ name: 'empty', nickname: 'empty' });

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

  const krEg = /[^가-힣^a-zA-Z]$/;
  const korean = /[a-z0-8]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;

  useEffect(() => {
    if (name === '') {
      setValid((prev) => {
        return { ...prev, name: 'empty' };
      });
    } else {
      if (korean.test(name)) {
        setValid((prev) => {
          return { ...prev, name: 'error' };
        });
      } else {
        setValid((prev) => {
          return { ...prev, name: 'success' };
        });
      }
    }
  }, [name]);

  useEffect(() => {
    if (nickname === '') {
      setValid((prev) => {
        return { ...prev, nickname: 'empty' };
      });
    } else {
      if (krEg.test(nickname)) {
        setValid((prev) => {
          return { ...prev, nickname: 'error' };
        });
      } else {
        setValid((prev) => {
          return { ...prev, nickname: 'success' };
        });
      }
    }
  }, [nickname]);
  return (
    <>
      <ModalHeader>
        <ButtonText onClick={() => (check == 1 ? OnFirst() : OnSecond())}>
          이전
        </ButtonText>
        <TopText>닉네임 설정</TopText>
        <ButtonText
          onClick={() =>
            nickname && !krEg.test(nickname)
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
            <InputDiv color={valid.name === 'error' ? '#E1756E' : '#B2E2AB'}>
              <TextInput
                color={name ? '#B2E2AB' : '#C3C2C2 '}
                onChange={setName}
                value={name}
                placeholder="이름"
                maxLength={8}
                type="text"
              />

              <PencilDiv>
                <PencilIcon
                  color={valid.name === 'error' ? '#E1756E' : '#B2E2AB'}
                />
              </PencilDiv>
            </InputDiv>
            <WarningDiv>
              {
                {
                  empty: <WarningText></WarningText>,
                  error: <ErrorText>이름은 한글만 입력해주세요.</ErrorText>,
                  success: (
                    <WarningText>최대 8글자인 한글만 가능합니다.</WarningText>
                  ),
                }[valid.name]
              }
              {/* {name !== "" ? (
                valid.name ? ( // 일치했을 때(한글만 작성됐을 때) true 불일치(한글이 아닌 글자) false
                  <WarningText>최대 8글자인 한글만 가능합니다.</WarningText> // true
                ) : (
                  <ErrorText>이름은 한글만 입력해주세요.</ErrorText> // false
                )
              ) : (
                <WarningText>최대 8글자인 한글만 가능합니다.</WarningText>
              )} */}
            </WarningDiv>

            <InputDiv
              color={valid.nickname === 'error' ? '#E1756E' : '#B2E2AB'}
            >
              <TextInput
                color={nickname ? '#B2E2AB' : '#C3C2C2'}
                onChange={setNickname}
                value={nickname}
                placeholder="닉네임"
                maxLength={8}
                type="text"
              />
              <PencilDiv>
                <PencilIcon
                  color={valid.nickname === 'error' ? '#E1756E' : '#B2E2AB'}
                />
              </PencilDiv>
            </InputDiv>
            <WarningDiv>
              {
                {
                  empty: <WarningText></WarningText>,
                  error: (
                    <ErrorText>아이디는 영문,숫자만 입력해주세요.</ErrorText>
                  ),
                  success: (
                    <WarningText>
                      최대 8글자까지인 한글 or 영어만 가능합니다.
                    </WarningText>
                  ),
                }[valid.nickname]
              }
              {/* {krEg.test(nickname) ? (
                <ErrorText>아이디는 영문,숫자만 입력해주세요.</ErrorText>
              ) : (
                <WarningText>
                  최대 8글자까지인 한글 or 영어만 가능합니다.
                </WarningText>
              )} */}
            </WarningDiv>
          </ProfileArea>
        </CenterContainer>
      </SelectBody>
    </>
  );
};

export default ThirdModal;
