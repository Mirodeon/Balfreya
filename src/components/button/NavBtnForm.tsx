type NavBtnFormProps = {
  className: string;
  content: string | JSX.Element;
  type: "button" | "submit" | "reset" | undefined;
  loading: boolean;
};

const NavBtnForm = ({ className, content, type, loading }: NavBtnFormProps) => {
  return (
    <button type={type} disabled={loading} className={"nav_btn" + className}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {content}
    </button>
  );
};

export default NavBtnForm;
