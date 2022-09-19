import React from "react";
import { ToggleBase,ToggleButton } from "./ToggleStyled";

const Toggle = ({background,click,check}) => {
    return (
        <ToggleBase background={background} >
            <ToggleButton click={click} check={check} />
        </ToggleBase>
    )
}
export default Toggle