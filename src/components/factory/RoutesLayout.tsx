import { RouteObject, useRoutes } from "react-router-dom";
import LayoutGrid, { DataLayout } from "./LayoutGrid";

const RoutesLayout = (data: DataLayout[] | null) => {
    const routes: RouteObject[] = [];

    if (data) {
        data.forEach((item) => {
            if (item.path) {
                routes.push({
                    path: item.path,
                    element:
                        <LayoutGrid gridTemplateAreas={item.gridTemplateAreas}>
                            {item.id}
                        </LayoutGrid>
                });
            }
        })
    }

    return useRoutes(routes);
}

export default RoutesLayout;