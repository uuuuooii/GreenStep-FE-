//react import
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//styled import
import styled from 'styled-components';
import {GoPrimitiveDot} from 'react-icons/go'
//modules import
import { getUserInfoThunk } from '../../Redux/modules/userInfoSlice';
//component import
import FirstModal from './Modal/FirstModal/FirstModal';
import SecondModal from './Modal/SecondModal/SecondModal';
import ThirdModal from './Modal/ThirdModal/ThirdModal';
import FourthModal from './Modal/FourthModal/FourthModal';
import LoadingBar from '../../Components/LoadingBar/LoadingBar';

const PageDot = styled(GoPrimitiveDot)`
  color: "#84CA79";
  /* ${(props)=>props.page==="on" ? "#84CA79" : "black"}; */
  transform: ${(props)=>props.page==="on" ? 'scale(1.3)' : null};

`
const DotArea = styled.div`
display: flex;
  width: 100px;
  top: 100px;
  position: fixed;
  left: 50%;
  transform: translateX( -50% );
  z-index: 2000;

`


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
      <FirstModal
        display={display}
        setDisplay={setDisplay}
        setImg={setImg}
        check={check}
        setCheck={setCheck}
        user={user}
        setNickname={setNickname}
      />
      <SecondModal
        display={display}
        setDisplay={setDisplay}
        setImg={setImg}
        img={img}
        second={second}
        setSecond={setSecond}
      />{' '}
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
      <DotArea>
        <PageDot page={display===1||display==2 ? "on" : null} onClick={()=>setDisplay(1)} />
        <PageDot page={display==3 ? "on" : null} onClick={()=>setDisplay(1)} />
        <PageDot page={display==4 ? "on" : null} onClick={()=>setDisplay(1)} />
      </DotArea>
    </>
  ) : (
    <LoadingBar />
  );
};

export default Modal;
