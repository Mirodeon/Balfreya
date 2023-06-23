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

  data.map(
    (item) =>
      items[item.pos].push(
        <NavBtn
          path={item.path}
          className={item.className}
          content={
            responsive.width ?
              item.name :
              <SvgFromJson data={item.icone} />
          }
          key={item.name}
        />
      )
  );

  return items;
};

export default NavItem;
