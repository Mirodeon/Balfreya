type NavBtnFormProps = {
  className: string;
  content: string | JSX.Element;
  type: "button" | "submit" | "reset" | undefined;
  loading: boolean;
};

const NavBtnForm = (props: NavBtnFormProps) => {
  return (
    <button type={props.type} disabled={props.loading} className={"nav_btn" + props.className}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.content}
    </button>
  );
};

export default NavBtnForm;
