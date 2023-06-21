import { RouteObject, useRoutes } from "react-router-dom";
import LayoutGrid from "./LayoutGrid";
import { DataLayout } from "../../type/type";
import LayoutGridChildren from "./LayoutGridChildren";

type RoutesLayoutProps = {
    data: DataLayout[];
}

const RoutesLayout = ({ data }: RoutesLayoutProps) => {
    const routesArray: RouteObject[] = [];

    data.forEach((item) => {
        if (item.path) {
            routesArray.push({
                path: item.path,
                element:
                    <LayoutGrid gridTemplateAreas={item.gridTemplateAreas}>
                        {item.children.map(element => <LayoutGridChildren data={element} />)}
                    </LayoutGrid>
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