import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store";
import locationNav from "../../utils/locationNav";
import { Responsive } from "../../utils/useResponsive";
import NavItem, { NavItems } from "./NavItem";
import data from "./nav.json";

type HeaderProps = {
  responsive: Responsive;
};

const Header = ({ responsive }: HeaderProps) => {
  const account = useSelector((state: RootState) => state.auth.account);
  const [btns, setBtns] = useState<NavItems | null>(null);
  const path = useLocation().pathname;

  useEffect(() => {
    setBtns(NavItem(responsive, data));
  }, [responsive]);

  useEffect(() => {
    const navLocation: { path: string; btn: string; }[] = [];
    data.forEach(data => {
      navLocation.push({ path: data.path.replace("/", ""), btn: data.className });
    });
    locationNav(path, navLocation);
  }, [path, btns]);

  return (
    <header className="main_header">
      <nav className="header_nav">
        <div className="left_header_nav">{btns?.left}</div>
        <h1 className="title_header" style={{ textTransform: "uppercase" }} >Balfreya</h1>
        <div className="right_header_nav">
          {account ? <>{btns?.rightAuth}</> : <>{btns?.rightNotAuth}</>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
