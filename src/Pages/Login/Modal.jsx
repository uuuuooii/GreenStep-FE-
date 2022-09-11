//react import
import React, { useState, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
//modules import
import { getUserInfoThunk } from '../../Redux/modules/userInfoSlice';
import instance from '../../Redux/modules/instance';
//component import
import FirstModal from './Modal/FirstModal/FirstModal';
import SecondModal from './Modal/SecondModal/SecondModal';
import ThirdModal from './Modal/ThirdModal/ThirdModal';
import LoadingBar from '../../Components/LoadingBar/LoadingBar';
//styled import
import Slide from 'react-reveal/Slide';

const Modal = () => {
  const [loading, setLoading] = useState(false);
  const [second, setSecond] = useState(false);
  const [display, setDisplay] = useState(1);
  const [img, setImg] = useState('');
  const [check, setCheck] = useState(0);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    setLoading(true);
    dispatch(getUserInfoThunk());
    setLoading(false);
    setImg(user.profilePhoto);
    setName(user.name);
    setNickname(user.nickname);
  }, []);

  return !loading ? (
    <>
      <FirstModal
        display={display}
        setDisplay={setDisplay}
        setImg={setImg}
        check={check}
        setCheck={setCheck}
        user={user}
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
    </>
  ) : (
    <LoadingBar />
  );
};

export default Modal;
