import RoutesLayout from "./RoutesLayout";
import { DataFactory } from "./useDataFactory";

type RouterFactoryProps = {
    data: DataFactory;
}
const RouterFactory = (props: RouterFactoryProps) => {
    const routes = RoutesLayout(props.data.layout)
    console.log("Routes:");
    console.log(routes);
    return <>{routes}</>
}

export default RouterFactory;