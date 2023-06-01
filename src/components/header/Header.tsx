import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store";
/*import locationNav from "../../utils/locationNav";*/
import { Responsive } from "../../utils/useResponsive";
import NavItem, { NavItems } from "./NavItem";

type HeaderProps = {
  responsive: Responsive;
};

const Header = ({ responsive }: HeaderProps) => {
  const account = useSelector((state: RootState) => state.auth.account);
  const [btns, setBtns] = useState<NavItems | null>(null);
  // const btns = NavItem(responsive);
  /* const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    locationNav(path);
  }, [path]);*/
  useEffect(() => {
    setBtns(NavItem(responsive));
  }, [responsive]);

  return (
    <header className="main_header">
      <nav className="header_nav">
        <div className="left_header_nav">{btns?.left}</div>
        <h1 className="title_header">BALFREYA</h1>
        <div className="right_header_nav">
          {account ? <>{btns?.rightAuth}</> : <>{btns?.rightNotAuth}</>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
