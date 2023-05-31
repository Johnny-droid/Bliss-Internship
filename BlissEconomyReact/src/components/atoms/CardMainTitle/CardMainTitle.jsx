import React from "react";
import { CardMainTitleStyle } from "./CardMainTitle.style.js";

function CardMainTitle({children, colorName}) {
    return ( 
        <CardMainTitleStyle colorName={colorName}>
            {children}
        </CardMainTitleStyle>
    );
}

export default CardMainTitle;