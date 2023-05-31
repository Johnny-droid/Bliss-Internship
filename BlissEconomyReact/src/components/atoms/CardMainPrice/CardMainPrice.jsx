import React from "react";
import { CardMainPriceStyle } from "./CardMainPrice.style.js";

function CardMainPrice({colorName, value}) {
    return ( 
        <CardMainPriceStyle colorName={colorName}>
            €&nbsp;{parseInt(value).toFixed(2).toString().replace('.', ',')}
        </CardMainPriceStyle>
    );
}

export default CardMainPrice;
