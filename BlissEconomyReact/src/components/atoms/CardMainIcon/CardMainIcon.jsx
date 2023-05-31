import React from "react";
import { CardMainIconStyle } from "./CardMainIcon.style.js";
import imgPathPositive from "../../../assets/icon_arrow_up.png";
import imgPathNegative from "../../../assets/icon_arrow_down.png";
import imgPathEdit from "../../../assets/icon_wallet_money_fill.png";

function CardMainIcon({colorName, width=56, height=56}) {
    let path, alt;
    switch (colorName) {
        case "positive":
            path = imgPathPositive;
            alt = "Positive Icon";
            break;
        case "negative":
            path = imgPathNegative;
            alt = "Negative Icon";
            break;
        default:
            path = imgPathEdit;
            alt = "Edit Icon";
            break;
    }

    return ( 
        <CardMainIconStyle 
            src={path}
            width={width}
            height={height}
            alt={alt}
        />
    );
}

export default CardMainIcon;