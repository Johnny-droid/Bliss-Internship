import React from "react";
import { AsideLinkIconStyle, AsideLinkStyle, LinkStyle } from "./AsideLink.style";
import iconDashboardActive from "../../../assets/icon_chart_active.png";
import iconDashboardDisabled from "../../../assets/icon_chart_disabled.png";
import iconTransactionsActive from "../../../assets/icon_arrow_swap_horizontal_active.png";
import iconTransactionsDisabled from "../../../assets/icon_arrow_swap_horizontal_disabled.png";

function AsideLink({children, link, pathName, onClick}) {
    let active, icon, alt;

    if (pathName === "/dashboard") {pathName = "/";}
    if (link === "/dashboard") {link = "/";}
    if (pathName === link) {active = true;} else {active = false;}
    
    if (active && link === "/") {
        icon = iconDashboardActive;
        alt = "Icon Dashboard Active";
    } else if (active && link === "/transactions") {
        icon = iconTransactionsActive;
        alt = "Icon Transactions Active";
    } else if (!active && link === "/") {
        icon = iconDashboardDisabled;
        alt = "Icon Dashboard Disabled";
    } else if (!active && link === "/transactions") {
        icon = iconTransactionsDisabled;
        alt = "Icon Transactions Disabled";
    }

    return (  
        <AsideLinkStyle $active={active} to={link} onClick={onClick}>
            <AsideLinkIconStyle src={icon} alt={alt} width={24} height={24}/>
            <LinkStyle $active={active}>{children}</LinkStyle>
        </AsideLinkStyle>
    );
}

export default AsideLink;