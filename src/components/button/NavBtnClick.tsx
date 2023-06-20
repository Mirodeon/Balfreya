type NavBtnClickProps = {
  className: string;
  content: string | JSX.Element;
  onClick: () => void;
};

const NavBtnClick = (props: NavBtnClickProps) => {
  return (
    <div className={"nav_btn " + props.className} onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.content}
    </div>
  );
};

export default NavBtnClick;
