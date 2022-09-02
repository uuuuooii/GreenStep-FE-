import FirstModal from './Modal/FirstModal/FirstModal';
import SecondModal from './Modal/SecondModal/SecondModal';
import ThirdModal from './Modal/ThirdModal/ThirdModal';
import useInput from '../../hooks/useInput';
import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';

const Modal = () => {
  const [display, setDisplay] = useState(1);
  const [img, setImg] = useState('');
  const [check, setCheck] = useState(0);
  const [name, setName] = useInput('');
  const [nickname, setNickname] = useInput('');
  const user = useSelector((state)=>state.user.user)

  return (
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
      />
    </>
  );
};

export default Modal;
