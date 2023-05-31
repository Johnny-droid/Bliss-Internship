import React, { useState} from "react";
import { LayoutStyle } from "./Layout.style";
import { SideMenu, Header, Footer } from "../../organisms";
import { Outlet } from "react-router-dom";


function Layout() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <LayoutStyle>
      <SideMenu active={activeMenu} setActive={setActiveMenu} />
      <Header openMenu={setActiveMenu} />
      <Outlet /> {/* <Outlet/> is a placeholder for the child routes */}
      <Footer />
    </LayoutStyle>
  );
}

export default Layout;
