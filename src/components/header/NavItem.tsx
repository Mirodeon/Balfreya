
import { Responsive } from "../../utils/useResponsive";
import SvgFromJson, { INode } from "../utils/SvgFromJson";
import NavBtn from "./NavBtn";

export interface NavItems { [key: string]: JSX.Element[] }

const NavItem = (responsive: Responsive, data: { path: string, className: string, name: string, icone: INode, pos: string }[]) => {
  const items: NavItems = {
    left: [],
    rightAuth: [],
    rightNotAuth: [],
  };

  const createNavItem = (
    path: string,
    className: string,
    name: string,
    icone: JSX.Element,
    pos: string
  ) => {
    items[pos].push(
      <NavBtn
        path={path}
        className={className}
        content={responsive.width ? name : icone}
        key={name}
      />
    );
  };

  data.map(item => createNavItem(item.path, item.className, item.name, SvgFromJson(item.icone), item.pos));

  return items;
};

export default NavItem;
