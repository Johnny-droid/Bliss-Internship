import React from "react";
import { ListItemImgStyle } from "./ListItemImg.style";

function ListItemImg({path, width = 32, height = 32, alt = "Icon Default"}) {
    const reqPath = require("../../../assets/" + path);

    return (  
        <ListItemImgStyle
            src={reqPath}
            width={width}
            height={height}
            alt={alt}
        />
    );
}

export default ListItemImg;