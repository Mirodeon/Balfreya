import { useState } from "react";
import useHealthCheck from "../utils/usehealthCheck";
import useByPath from "../utils/useByPath";
import { AuthRoutes } from "../routes";
import { Cube, LoginForm, RegisterForm, Status } from "../components/auth";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const data = [
  {
    path: "/login",
    docTitle: "Balfreya - login",
    auth: false,
    notAuth: true,
    message: "Login",
    form: true,
    content: <LoginForm />,
  },
  {
    path: "/register",
    docTitle: "Balfreya - register",
    auth: false,
    notAuth: true,
    message: "Register",
    form: true,
    content: <RegisterForm />,
  },
  {
    path: "/profile",
    docTitle: "Balfreya - profile",
    auth: true,
    notAuth: false,
    message: "Welcome",
    form: false,
    content: <></>,
  },
];

const UserHub = () => {
  const account = useSelector((state: RootState) => state.auth.account);
  const status = useHealthCheck();
  const [form, setForm] = useState(false);
  const messages = AuthRoutes({ data: data, key: "message" });
  const contents = AuthRoutes({ data: data, key: "content" });

  useByPath(data, (item: { docTitle: string; form: boolean }) => {
    document.title = item.docTitle + (account ? ` : ${account.username}` : "");
    setForm(item.form);
  });

  return (
    <div className="container_page_profile">
      <main className={"container_profile" + (form ? " form_profile" : "")}>
        <div className="container_welcome_profile">
          <Cube status={status.className} />
          <div className="welcome_profile">{messages}</div>
        </div>
        {status.connect ? contents : <Status status={status} />}
      </main>
    </div>
  );
};

export default UserHub;
