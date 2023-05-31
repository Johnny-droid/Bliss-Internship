import React from "react";
import { useLocation } from "react-router-dom";
import { AsideIconSocialMedia, AsideLink } from "../../atoms";
import { SideMenuStyle, SideMenuNavStyle, SideMenuLogoStyle, SideMenuFooterStyle, CloseButtonStyle } from "./SideMenu.style";
import logo from "../../../assets/logo_desktop.png";
import iconClose from "../../../assets/icon_menu_close.png";


function SideMenu({active, setActive}) {
    const {pathname} = useLocation();
    

    return (  
        <SideMenuStyle active={active}>
            <SideMenuLogoStyle>
                <img src={logo} alt="Logo Bliss Economics" width={120} height={52}/>
            </SideMenuLogoStyle>
            <CloseButtonStyle onClick={() => setActive(false)}>
                <img src={iconClose} alt="Icon Close Menu"/>
            </CloseButtonStyle>
            <SideMenuNavStyle>
                <AsideLink pathName={pathname} link="/" onClick={() => setActive(false)}>
                    Dashboard
                </AsideLink>
                <AsideLink pathName={pathname} link="/transactions" onClick={() => setActive(false)}>
                    Transactions
                </AsideLink>
            </SideMenuNavStyle>

            <SideMenuFooterStyle>
                <AsideIconSocialMedia pathIcon="icon_linkedin.png" alt="Icon Linkedin" link="https://www.linkedin.com/company/bliss-applications"/>
                <AsideIconSocialMedia pathIcon="icon_facebook.png" alt="Icon Facebook" link="https://www.facebook.com/blissapps/"/>
                <AsideIconSocialMedia pathIcon="icon_instagram.png" alt="Icon Instagram" link="https://www.instagram.com/blissapps/?hl=en"/>
                <AsideIconSocialMedia pathIcon="icon_twitter.png" alt="Icon Twitter" link="https://twitter.com/blissapps?lang=en" height={20}/>
            </SideMenuFooterStyle>
        </SideMenuStyle>
    );
}

export default SideMenu;