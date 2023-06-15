type NavBtnClickProps = {
  className: string;
  content: string | JSX.Element;
  onClick: () => void;
};

const NavBtnClick = ({ className, content, onClick }: NavBtnClickProps) => {
  return (
    <div className={"nav_btn " + className} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {content}
    </div>
  );
};

export default NavBtnClick;
