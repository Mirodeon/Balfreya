import { RouteObject, useRoutes } from "react-router-dom";

type ManyToOneRouteProps = {
    paths: string[];
    element: JSX.Element;
}

const ManyToOneRoute = ({ paths, element }: ManyToOneRouteProps) => {
    const routes: RouteObject[] = [];
    paths.forEach((p) => {
        routes.push({
            path: p,
            element: element
        });
    });
    return useRoutes(routes);
}

export default ManyToOneRoute;