import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store";
import locationNav from "../../utils/locationNav";
import { Responsive } from "../../utils/useResponsive";
import NavItem, { DataNav, NavItems } from "./NavItem";

type HeaderProps = {
  responsive: Responsive;
  main: boolean;
  title: string;
  data: DataNav[];
};

const Header = ({ responsive, main, title, data }: HeaderProps) => {
  const account = useSelector((state: RootState) => state.auth.account);
  const [btns, setBtns] = useState<NavItems | null>(null);
  const path = useLocation().pathname;

  useEffect(() => {
    setBtns(NavItem(responsive, data));
  }, [data, responsive]);

  useEffect(() => {
    locationNav(path, data, main);
  }, [path, btns, data, main]);

  return (
    <header className={"main_header" + (main ? " origin_header" : "")}>
      <nav className="header_nav">
        <div className="left_header_nav">{btns?.left}</div>
        <h1 className="title_header" style={{ textTransform: "uppercase" }}>
          {title}
        </h1>
        <div className="right_header_nav">
          {main ? (
            account ? (
              <>{btns?.rightAuth}</>
            ) : (
              <>{btns?.rightNotAuth}</>
            )
          ) : (
            <>{btns?.right}</>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
