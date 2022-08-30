import FirstModal from "./Modal/FirstModal/FirstModal";
import SecondModal from "./Modal/SecondModal/SecondModal";
import ThirdModal from "./Modal/ThirdModal/ThirdModal";
import { useState } from "react";

const Modal = () => {
const [display,setDisplay] = useState(1)
    return(
        <>
        <FirstModal display={display} setDisplay={setDisplay}  />
        <SecondModal display={display} setDisplay={setDisplay} />
        <ThirdModal display={display} setDisplay={setDisplay} />
        </>
    )
}

export default Modal