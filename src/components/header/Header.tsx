import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store";
import locationNav from "../../utils/locationNav";
import NavItem from "./NavItem";
import { DataNav, DataNavList, NavItems, Responsive } from "../../type/type";

type HeaderProps = {
  responsive: Responsive;
  main: boolean;
  title: string;
  dataNav: DataNav[];
  dataNavList: DataNavList[];
};

const Header = (props: HeaderProps) => {
  const account = useSelector((state: RootState) => state.auth.account);
  const [btns, setBtns] = useState<NavItems | null>(null);
  const path = useLocation().pathname;

  useEffect(() => {
    setBtns(NavItem(props.responsive, props.dataNav));
  }, [props.dataNav, props.responsive]);

  useEffect(() => {
    locationNav(path, props.dataNavList, props.main);
  }, [path, btns, props.dataNavList, props.main]);

  return (
    <header className={"main_header" + (props.main ? " origin_header" : " factory_header")}>
      <nav className="header_nav">
        <div className="left_header_nav">{btns?.left}</div>
        <h1 className="title_header" style={{ textTransform: "uppercase" }}>
          {props.title}
        </h1>
        <div className="right_header_nav">
          {props.main ? (
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
