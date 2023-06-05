import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store'

type PrivateRouteProps = {
    element: JSX.Element;
    auth: boolean;
    notAuth: boolean;
    path?: string;
}

export const PrivateRoute = ({ element, auth, notAuth }: PrivateRouteProps) => {
    const account = useSelector((state: RootState) => state.auth.account);
    const allAccess = auth && notAuth;
    const userAccess = auth && !notAuth && account;
    const nonUsersAccess = !auth && notAuth && !account;

    if (allAccess || userAccess || nonUsersAccess) {
        return element;
    } else {
        return <Navigate to={!auth ? "/profile" : "/login"} />;
    }
}