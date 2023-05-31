import React from "react";
import { ButtonStyle, ButtonTitleStyle } from "./ModalOpenButton.style";

function ModalOpenButton({ title, path, colorName, alt="", onClick}) {
    const dataImg = require(`../../../assets/${path}`);

    return (
        <ButtonStyle onClick={onClick}>
            <img src={dataImg} alt={ alt ?? "Icon Open Modal Default"} width={36} height={36}/>
            <ButtonTitleStyle colorName={colorName}>{title}</ButtonTitleStyle>
        </ButtonStyle>
    );
}

export default ModalOpenButton;
