import React from "react";
import { SecondModalBody, SecondModalSection } from "./SecondModalStyled";





const URL = process.env.REACT_APP_URL;
const SecondModal = ({display,setDisplay,setImg}) => {

    return(<SecondModalBody display={display}>
        <SecondModalSection>

        </SecondModalSection>
    </SecondModalBody>)
}

export default SecondModal