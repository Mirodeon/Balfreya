import { RouteObject, useRoutes } from "react-router-dom";
import LayoutGrid, { DataLayout } from "./LayoutGrid";

type RoutesLayoutProps = {
    data: DataLayout[];
}

const RoutesLayout = ({ data }: RoutesLayoutProps) => {
    const routesArray: RouteObject[] = [];

    data.forEach((item) => {
        if (item.path) {
            routesArray.push({
                path: item.path,
                element: <>
                    <LayoutGrid gridTemplateAreas={item.gridTemplateAreas}>
                        {item.id}Giga mega pouet
                    </LayoutGrid></>
            });
        }
    })

    console.log("Array of RouteObject:");
    console.log(routesArray);
    const routes = useRoutes(routesArray);
    console.log("Routes:");
    console.log(routes);

    return <div className="main_layout_container">{routes}</div>;
}

export default RoutesLayout;