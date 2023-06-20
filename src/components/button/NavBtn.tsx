import { Link } from "react-router-dom";

type NavBtnProps = {
  path: string;
  className: string;
  content: string | JSX.Element;
};

const NavBtn = (props: NavBtnProps) => {
  return (
    <Link to={props.path} className={"nav_btn " + props.className}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.content}
    </Link>
  );
};

export default NavBtn;
