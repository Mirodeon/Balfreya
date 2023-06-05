import { RouteObject, useRoutes } from "react-router-dom";

type ManyToManyRouteProps = {
    routes: RouteObject[];
}

const ManyToManyRoute = ({ routes }: ManyToManyRouteProps) => {
    return useRoutes(routes);
};

export default ManyToManyRoute;