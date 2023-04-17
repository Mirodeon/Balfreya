import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store";
/*import locationNav from "../../utils/locationNav";*/
import { Responsive } from "../../utils/useResponsive";
import NavBtn from "./NavBtn";
import NavItem from "./NavItem";

type HeaderProps = {
  responsive: Responsive;
};

const Header = ({ responsive }: HeaderProps) => {
  const account = useSelector((state: RootState) => state.auth.account);
  /* const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    locationNav(path);
  }, [path]);*/
  type BtnProps = {
    path: string;
    className: string;
    name: string;
    icone: JSX.Element;
  };

  const getBtns = (btns: BtnProps[]) => {
    const result: JSX.Element[] = [];
    btns.forEach((btn) =>
      result.push(
        <NavBtn
          path={btn.path}
          className={btn.className}
          content={responsive.width ? btn.name : btn.icone}
          key={btn.name}
        />
      )
    );
    return result;
  };

  const leftBtns = getBtns(NavItem.leftNavBar);
  const rightAuthBtns = getBtns(NavItem.rightNavBar.auth);
  const rightNotAuthBtns = getBtns(NavItem.rightNavBar.notAuth);

  return (
    <header>
      <nav className="header_nav">
        <div className="left_header_nav">{leftBtns}</div>
        <div className="right_header_nav">
          {account ? <>{rightAuthBtns}</> : <>{rightNotAuthBtns}</>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
