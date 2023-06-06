import { RouteObject, useRoutes } from "react-router-dom";
import { PrivateRoute } from ".";

type AuthRoutesProps = {
    data: {
        [key: string]: JSX.Element | string | boolean;
        path: string;
        auth: boolean;
        notAuth: boolean;
    }[];
    key: string;
}

const AuthRoutes = ({ data, key }: AuthRoutesProps) => {
    let routes: RouteObject[] = [];

    data.forEach(item => routes.push({
        path: item.path,
        element:
            <PrivateRoute
                element={typeof item[key] === "string" ? <>{item[key]}</> : item[key] as JSX.Element}
                auth={item.auth}
                notAuth={item.notAuth}
            />
    }));

    return useRoutes(routes);
}

export default AuthRoutes;