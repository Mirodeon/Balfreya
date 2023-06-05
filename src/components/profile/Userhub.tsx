import { useEffect, useState } from "react";
import Status from "./Status";
import Cube from "./Cube";
import useTimeOut from "../../utils/useTimeOut";
import useHealthCheck from "../../utils/usehealthCheck";
import RegisterForm from "../auth/RegisterForm";
import useByPath from "../../utils/useByPath";
import AuthRoutes from "../auth/AuthRoutes";

type UserHubProps = {
    message: JSX.Element;
    content: JSX.Element;
    form: boolean;
};

const data = [
    {
        path: "/user/login", docTitle: "Balfreya - login", message: "Login", form: true, content: <></>
    },
    {
        path: "/user/register", docTitle: "Balfreya - register", message: "Register", form: true, content: <RegisterForm />
    },
    {
        path: "/user/profile", docTitle: "Balfreya - profile", message: "", form: false, content: <></>
    }
];

const UserHub = (/* { message, content, form }: UserHubProps */) => {
    const [connect, setConnect] = useState(false);
    const status = useHealthCheck();
    const [form, setForm] = useState(false);
    const message = AuthRoutes(data,)

    useByPath(data, (data: { docTitle: string, form: boolean }) => { document.title = data.docTitle; setForm(form); });

    useTimeOut(
        () => {
            setConnect(true);
        },
        status === "success" ? 2100 : null
    );

    const classNameStatus =
        status === "pending"
            ? " wait_check"
            : status === "failed"
                ? " fail_check"
                : connect
                    ? ""
                    : " success_check";

    return (
        <div className="container_page_profile">
            <main className={"container_profile" + (form ? " form_profile" : "")}>
                <div className="container_welcome_profile">
                    <Cube status={classNameStatus} />
                    <div className="welcome_profile">{message}</div>
                </div>
                {connect ? (
                    content
                ) : (
                    <Status status={status} classNameStatus={classNameStatus} />
                )}
            </main>
        </div>
    );
};

export default UserHub;