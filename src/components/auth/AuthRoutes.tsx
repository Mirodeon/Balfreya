import { Routes } from "react-router-dom";
import { PrivateRoute } from "../../routes/PrivateRoute";
import ManyToManyRoute from "../../routes/ManyToManyRoute";

const AuthRoutes = (data:{path:string,[key:string]:JSX.Element || string}[], ) => {
    return (
        <Routes>
            <ManyToManyRoute routes={[
                { path: login.path, element: <PrivateRoute element={login.element} auth={false} notAuth={true} /> },
                { path: register.path, element: <PrivateRoute element={register.element} auth={false} notAuth={true} /> },
                { path: profile.path, element: <PrivateRoute element={profile.element} auth={true} notAuth={false} /> }
            ]} />
        </Routes>
    );
}

export default AuthRoutes;