import React, { useContext } from "react";
import { HeaderEyeButtonShowStyle, HeaderLogoStyle, HeaderStyle, OpenMenuButtonStyle } from "./Header.style";
import logo from "../../../assets/logo_mobile.png";
import eyeShow from "../../../assets/icon_eye.png";
import eyeHide from "../../../assets/icon_eye_slash.png";
import iconOpenMenu from "../../../assets/icon_menu_open.png";
import { MoneyHideContext } from "../../../stores/settings-store";

function Header({openMenu}) {

    const [moneyHide, setMoneyHide] = useContext(MoneyHideContext);

    return (  
        <HeaderStyle>
            <OpenMenuButtonStyle onClick={() => openMenu(true)}>
                <img src={iconOpenMenu} alt="Icon Open Menu"/>
            </OpenMenuButtonStyle>

            <HeaderLogoStyle id="logo_mobile" src={logo} alt="Logo Bliss Economy" />
            
            <HeaderEyeButtonShowStyle onClick={() => setMoneyHide(!moneyHide)}>
                <img src={moneyHide ? eyeHide : eyeShow } alt={moneyHide ? "Price Hidding Icon" : "Price Showing Icon"} width={28} height={24}/>    
            </HeaderEyeButtonShowStyle>
            
        </HeaderStyle>
    );
}

export default Header;