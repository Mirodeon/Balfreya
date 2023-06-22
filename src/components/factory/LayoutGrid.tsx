import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

type LayoutGridProps = {
    gridTemplateAreas: string;
    title: string;
}

const LayoutGrid = (props: PropsWithChildren<LayoutGridProps>) => {
    const account = useSelector((state: RootState) => state.auth.account);
    document.title = props.title + (account ? ` : ${account.username}` : "");

    return (
        < div
            className="layout_grid"
            style={{ gridTemplateAreas: props.gridTemplateAreas }}
        >
            {props.children}
        </div >
    )
}

export default LayoutGrid;