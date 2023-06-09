import { RouteObject, useRoutes } from "react-router-dom";
import { DataLayout } from "../../type/type";
import { LayoutContainer, LayoutGrid, LayoutGridChildren } from ".";

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
                    <LayoutGrid gridTemplateAreas={item.gridTemplateAreas} title={item.title}>
                        {item.children.map(element => <LayoutGridChildren data={element} key={element.id} />)}
                    </LayoutGrid>
            });
        }
    })

    console.log("Array of RouteObject:");
    console.log(routesArray);
    const routes = useRoutes(routesArray);
    console.log("Routes:");
    console.log(routes);

    return <LayoutContainer>{routes}</LayoutContainer>;
}

export default RoutesLayout;