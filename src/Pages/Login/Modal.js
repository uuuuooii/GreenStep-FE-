import FirstModal from "./Modal/FirstModal/FirstModal";
import SecondModal from "./Modal/SecondModal/SecondModal";
import ThirdModal from "./Modal/ThirdModal/ThirdModal";
import { useState } from "react";

const Modal = () => {
const [display,setDisplay] = useState(1)
const [img,setImg] = useState('')
console.log(img)
    return(
        <>
        <FirstModal display={display} setDisplay={setDisplay} setImg={setImg} />
        <SecondModal display={display} setDisplay={setDisplay} setImg={setImg}  />
        <ThirdModal display={display} setDisplay={setDisplay} setImg={setImg}  />
        </>
    )
}

export default Modal