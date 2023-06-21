import SvgFromJson from "../utils/SvgFromJson";
import { NavBtn } from "../button";
import { DataNav, NavItems, Responsive } from "../../type/type";

const NavItem = (responsive: Responsive, data: DataNav[]) => {
  const items: NavItems = {
    left: [],
    rightAuth: [],
    rightNotAuth: [],
    right: [],
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

  data.map((item) =>
    createNavItem(
      item.path,
      item.className,
      item.name,
      SvgFromJson(item.icone),
      item.pos
    )
  );

  return items;
};

export default NavItem;
