import FirstModal from './Modal/FirstModal/FirstModal';
import SecondModal from './Modal/SecondModal/SecondModal';
import ThirdModal from './Modal/ThirdModal/ThirdModal';
import useInput from '../../hooks/useInput';
import { useState } from 'react';

const Modal = () => {
  const [display, setDisplay] = useState(1);
  const [img, setImg] = useState('');
  const [check, setCheck] = useState(0);
  const [name, setName] = useInput('');
  const [nickname, setNickname] = useInput('');

  return (
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
      />
    </>
  );
};

export default Modal;
