//react import
import React, { useState, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import { useDispatch,useSelector } from 'react-redux';
//modules import
import { getUserInfoThunk } from "../../Redux/modules/userInfoSlice";
import instance from '../../Redux/modules/instance';
//component import
import FirstModal from "./Modal/FirstModal/FirstModal";
import SecondModal from "./Modal/SecondModal/SecondModal";
import ThirdModal from "./Modal/ThirdModal/ThirdModal";
import LoadingBar from "../../Components/LoadingBar/LoadingBar";

const Modal = () => {
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(1);
  const [img, setImg] = useState("");
  const [check, setCheck] = useState(0);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    setLoading(true);
instance.get('/users/info').then((res)=>{setName(res.data.data.name);setNickname(res.data.data.nickname);setImg(res.data.data.profilePhoto)})
    setLoading(false);
  }, []);

  return !loading ? (
    <>
      <FirstModal
        display={display}
        setDisplay={setDisplay}
        setImg={setImg}
        check={check}
        setCheck={setCheck}

      />
      <SecondModal
        display={display}
        setDisplay={setDisplay}
        setImg={setImg}
        img={img}
      />
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
      />{' '}
    </>
  ) : (
    <LoadingBar />
  );
};

export default Modal;
