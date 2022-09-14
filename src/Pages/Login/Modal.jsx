//react import
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styled import
import styled, { keyframes } from 'styled-components';
import OnDot from '../../static/components/Login/OnDot';
import NonDot from '../../static/components/Login/NonDot';
//modules import
import { getUserInfoThunk } from '../../Redux/modules/userInfoSlice';
//component import
import FirstModal from './Modal/FirstModal/FirstModal';
import SecondModal from './Modal/SecondModal/SecondModal';
import ThirdModal from './Modal/ThirdModal/ThirdModal';
import FourthModal from './Modal/FourthModal/FourthModal';
import LoadingBar from '../../Components/LoadingBar/LoadingBar';

const Modal = () => {
  const [loading, setLoading] = useState(false);
  const [second, setSecond] = useState(false);
  const [display, setDisplay] = useState(1);
  const [img, setImg] = useState('');
  const [check, setCheck] = useState(0);

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo.userInfo);

  useEffect(() => {
    setLoading(true);
    dispatch(getUserInfoThunk());
    setLoading(false);
  }, [dispatch]);
  return !loading ? (
    <>
      <ModalBody>
        <ModalSection>
          {display === 1 ? (
            <FirstModal
              display={display}
              setDisplay={setDisplay}
              setImg={setImg}
              check={check}
              setCheck={setCheck}
              user={user}
              setNickname={setNickname}
            />
          ) : display === 2 ? (
            <SecondModal
              display={display}
              setDisplay={setDisplay}
              setImg={setImg}
              img={img}
              second={second}
              setSecond={setSecond}
            />
          ) : display === 3 ? (
            <ThirdModal
              display={display}
              setDisplay={setDisplay}
              setImg={setImg}
              check={check}
              setName={setName}
              setNickname={setNickname}
              nickname={nickname}
              name={name}
              img={img}
            />
          ) : display === 4 ? (
            <FourthModal
              display={display}
              setDisplay={setDisplay}
              setImg={setImg}
              check={check}
              setName={setName}
              setNickname={setNickname}
              nickname={nickname}
              name={name}
              img={img}
            />
          ) : null}
          <DotArea>
            {display === 1 || display === 2 ? (
              <DotDiv>
                <NonDot />
              </DotDiv>
            ) : (
              <OnDot />
            )}
            {display === 3 ? (
              <DotDiv>
                <NonDot />
              </DotDiv>
            ) : (
              <OnDot />
            )}
            {display === 4 ? (
              <DotDiv>
                <NonDot />
              </DotDiv>
            ) : (
              <OnDot />
            )}
          </DotArea>
        </ModalSection>
      </ModalBody>
    </>
  ) : (
    <LoadingBar />
  );
};

export default Modal;

const TransX = keyframes`
from{transform: scaleX(0.2)}
to{transform: scaleX(1)}
`;

const ModalBody = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  max-height: 667px;
  max-width: 375px;
  margin: auto;
  background-color: #fcfcfa;
`;

const ModalSection = styled.div`
  width: 100%;
  height: 90%;
  background-color: white;
  margin: 0px auto 0px auto;
  position: relative;
  background-color: #fcfcfa;
`;

const DotArea = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 105px;
  height: 15px;
  z-index: 1000;
`;
const DotDiv = styled.div`
  animation-name: ${TransX};
  animation-duration: 0.35s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
