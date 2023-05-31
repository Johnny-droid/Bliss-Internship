import React from "react";
import { IconContainer } from "./AsideIconSocialMedia.style";

function AsideIconSocialMedia({pathIcon, alt="", link="", width=24, height=24}) {
    const dataIcon = require(`../../../assets/${pathIcon}`);

    return (  
        <IconContainer href={link}>
            <img src={dataIcon} alt={alt ? alt : "Icon"} width={width} height={height}/>
        </IconContainer>
    );
}

export default AsideIconSocialMedia;